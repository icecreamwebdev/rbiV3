import React from 'react';
import groq from 'groq';
import client from '../../utils/client';
import Link from 'next/link';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url'


const blog = ({posts}) => {


    function urlFor (source) {
        return imageUrlBuilder(client).image(source)
      }

    console.log(posts[0])
    return (
        <div className='flex w-full justify-center p-7' > 


         <div className=' max-w-2xl  w-full grid md:grid-cols-3 grid-cols-1 gap-6'>



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
</>

              )
          )}

          </div>
          </div>

         
        
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
        }
      }
  }
  
  export default blog