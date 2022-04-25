import React from 'react';
import groq from 'groq';
import client from '../../utils/client';
import Link from 'next/link';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url'
import Footer from '../../components/Footer/Footer';
import Policies from '../../components/Policies/Policies';
import Head from 'next/head';

const blog = ({posts}) => {


    function urlFor (source) {
        return imageUrlBuilder(client).image(source)
      }

    console.log(posts[0])
    return (
      <>
      <Head>
        <title>Run By Influencers - Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="UTF-8" />
        <meta name="description" content="Influencer and digital marketing blog. Exploring different topics in the world of social media. " />
        <meta name="keywords" content="influencer content agency blog" />
      </Head>
        <div className='flex w-full justify-center p-7' > 
        

        <div className='max-w-2xl min-h-screen'>

        <h1 className='text-2xl flex justify-center font-base uppercase h-min pb-3 pt-5'>blog posts</h1>
            <div className='w-20 flex justfiy-center h-0.5 rounded bg-gray-300 m-auto mt-0 pt-0'></div>
         <div className='  mt-10 w-full grid md:grid-cols-3 grid-cols-1 gap-6'>

             



          {posts.length > 0 && posts.map(
            ({ _id, _createdAt, title = '', slug = '', publishedAt = '' , mainImage}) =>
              slug && (
<>

                <div className='flex-col flex w-full p-2  p-4 bg-white-100 border border-gray-100 shadow rounded'>
                <Link  href="/blog/[slug]" as={`/blog/${slug.current}`}>
                    <img className='cursor-pointer' src={urlFor(mainImage.asset.url).width(400)
              .height(250)} width='650' height='250' objectFit='cover' />
              </Link>
                  <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                    <a className='font-semibold mt-2'>{title}</a>
                  </Link>{' '}
                  <span  className='text-gray-700 font-light text-xs' >
                  {new Date(_createdAt).toDateString()}
                  </span>
   </div>

   {/* <div className='flex-col flex w-full p-2  p-4 bg-white-100 border border-gray-100 shadow rounded'>
                <Link  href="/blog/[slug]" as={`/blog/${slug.current}`}>
                    <img className='cursor-pointer' src={urlFor(mainImage.asset.url).width(400)
              .height(250)} width='650' height='250' objectFit='cover' />
              </Link>
                  <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                    <a className='font-semibold mt-2'>{title}</a>
                  </Link>{' '}
                  <span  className='text-gray-700 font-light text-xs' >
                  {new Date(_createdAt).toDateString()}
                  </span>
   </div>

   <div className='flex-col flex w-full p-2  p-4 bg-white-100 border border-gray-100 shadow rounded'>
                <Link  href="/blog/[slug]" as={`/blog/${slug.current}`}>
                    <img className='cursor-pointer' src={urlFor(mainImage.asset.url).width(400)
              .height(250)} width='650' height='250' objectFit='cover' />
              </Link>
                  <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                    <a className='font-semibold mt-2'>{title}</a>
                  </Link>{' '}
                  <span  className='text-gray-700 font-light text-xs' >
                  {new Date(_createdAt).toDateString()}
                  </span>
   </div>

   <div className='flex-col flex w-full p-2  p-4 bg-white-100 border border-gray-100 shadow rounded'>
                <Link  href="/blog/[slug]" as={`/blog/${slug.current}`}>
                    <img className='cursor-pointer' src={urlFor(mainImage.asset.url).width(400)
              .height(250)} width='650' height='250' objectFit='cover' />
              </Link>
                  <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                    <a className='font-semibold mt-2'>{title}</a>
                  </Link>{' '}
                  <span  className='text-gray-700 font-light text-xs' >
                  {new Date(_createdAt).toDateString()}
                  </span>
   </div> */}
</>



              )
          )}
</div>
          </div>
          </div>
          <Footer />
          <Policies />
          </>

         
        
      )
  }
  
  export async function getStaticProps() {
      const posts = await client.fetch(groq`
        *[_type == "post"] | order(_createdAt desc){

            title,
            slug,
            _id,
            _createdAt,
            author -> {
                name,
                image {
                  asset ->
                }
              },
              mainImage {
                asset -> {
                  _id,
                  url
                }
              },

        }
      `)
      return {
        props: {
          posts
        },
        revalidate: 10, // In seconds
      }
  }
  
  export default blog