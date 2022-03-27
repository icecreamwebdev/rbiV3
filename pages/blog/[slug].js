import client from "../../utils/client";
import groq from "groq";
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import Footer from '../../components/Footer/Footer';
 


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
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    mainImage,
    _createdAt,
    body = []
  } = post
  return (
    <>
    <div className='blog pb-12 p-7 pt-0'>
    <div className='max-w-2xl flex justify-center md:mt-10 mt-7 m-auto xl:p-0 pb-10'>
    <article>
      <h1 className='title'>{title}</h1>
      <div className='flex mt-7 mb-5 items-center'>

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
      {/* {categories && (
        <ul>
          Posted in
          {categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      )} */}
      
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
    }
  }
}
export default Post