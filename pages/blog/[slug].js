import client from "../../utils/client";
import groq from "groq";
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import Footer from '../../components/Footer/Footer';
import { EmailIcon, EmailShareButton, FacebookShareButton, PinterestIcon, PinterestShareButton, RedditIcon, RedditShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import { FacebookIcon } from "react-share";
import { Router, useRouter } from "next/router";
import Policies from "../../components/Policies/Policies";



function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}




const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className='bodyImage'>
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).fit('max').auto('format')}
        />
        <span>{value.caption}</span>
  </div>
      )
    }
  }
}

const Post = ({post}) => {


  const route = useRouter();
  const titleSlug = route.query.slug;



  if (!post){
    return null;
  }

  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    mainImage,
    _createdAt,
    body = [],
  } = post

  const shareUrl = 'https://rbiv3-cgdruxdon-icecreamwebdev.vercel.app/blog/' + titleSlug

  return (
    <>
    <div className='blog pb-12 p-7 pt-0'>
    <div className='max-w-2xl w-full justify-center md:mt-10 mt-7 m-auto xl:p-0 pb-10'>
    <article>
      <span className='md:text-3xl text-2xl font-extrabold'>{title}</span>
      <div className='flex-col flex md:flex-row mt-7 mb-5 md:items-center justify-between'>

    <div className='flex items-center'>
      {authorImage && (
        <div>
          <img className='rounded-full'
            src={urlFor(authorImage)
              .width(50)
              .height(50)
              .url()}
            alt={`${name}'s picture`}
          />
        </div>
        
      )}
      <div className='ml-3 text-gray-700 flex-col flex'>
      <span className='font-base text-sm'>By {name}</span>
      <span className='text-xs text-gray-400 font-light'>{new Date(_createdAt).toDateString()}</span>
      </div>
      </div>
      {/* {categories && (
        <ul>
          Posted in
          {categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      )} */}
      <div className="flex space-x-1.5 mt-5">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="hover:opacity-80"
          >
            <FacebookIcon size={25} round />
          </FacebookShareButton>

          <TwitterShareButton
            url={shareUrl}
            quote={title}
            className=""
          >
            <TwitterIcon size={25} round />
          </TwitterShareButton>

          <PinterestShareButton
            url={shareUrl}
            quote={title}
            className=""
          >
            <PinterestIcon size={25} round />
          </PinterestShareButton>

          <WhatsappShareButton
            url={shareUrl}
            quote={title}
            className=""
          >
            <WhatsappIcon size={25} round />
          </WhatsappShareButton>

          <RedditShareButton
            url={shareUrl}
            quote={title}
            className=""
          >
            <RedditIcon size={25} round />
          </RedditShareButton>

          <EmailShareButton
            url={shareUrl}
            quote={title}
            className=""
          >
            <EmailIcon size={25} round />
          </EmailShareButton>

         
</div>
</div>



<div className='heroImage md:h-[450px] sm:h-[300px] h-[240px]'>
<img
            src={urlFor(mainImage)
              .url()}
            alt={`${name}'s picture`}
          />
          </div>
          <div className='articleMain'>
      <PortableText
        value={body}
        components={ptComponents}
      />
      </div>
    </article>
    </div>
    </div>
    <Footer />
    <Policies />
    
    </>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  mainImage {
    asset -> {
      _id,
      url
    }
  },
  body,
  _createdAt
}`
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    },
    revalidate: 10, // In seconds
  }
}
export default Post