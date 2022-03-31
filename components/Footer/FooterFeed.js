import React from 'react';
import Image from 'next/image';
import PreviewSlicer from '../../utils/PreviewSlicer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import useSWR from 'swr';
import Link from 'next/link';


const FooterFeed = () => {


    const token = 'IGQVJWaUpiSmpnSzYxaTdBY2pnSzZAfUnJiaERWcVBvbVlqTTJUSkxkNTN2LWFXODJPR0p6eTlIVXFRZAWN0ZAV8xU1hxcGFTTkpUZAWs1ZAzBBeHMyWV82UGIzOC1wZAXZAkS0NLRkM4UzFBZAFFnRXQ3WFlFZAAZDZD'
    const limit = 3

  const address = `https://graph.instagram.com/me/media?fields=id,media_type,permalink,media_url,caption&limit=${limit}&access_token=${token}`;

  const fetcher = (url, date) => fetch(address).then((r) => r.json());


  const { data, error } = useSWR(address, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>


  console.log(data)


//   const fetcher = async (url) => await axios.get(url).then((res) => res.data);
//   const { data, error } = useSWR(address, fetcher);

//   if (error) <p>Loading failed...</p>;
//   if (!data) <h1>Loading...</h1>;


    const posts = [{img: 'safetyBackground.jpeg', comments: 0, likes: 1, caption: 'This is my first post of a test account'},{img: 'safetyBackground.jpeg', comments: 0, likes: 0, caption: 'This is my second post of a test account, used to test out api calls and design'}]
    const commentIcon = <FontAwesomeIcon icon={faComment} />
    const likeIcon = <FontAwesomeIcon icon={faHeart} />

    if (!posts){

        return <ul></ul>
    }
    return (
        <ul>

                            {data.data.slice(0,3).map((post, i) => {
                    return (
                        <li key={i}>
                            <Link href={post.permalink}>
                            <div className='flex mb-3 cursor-pointer text-xtiny shrink-0 justify-left '>
                            {/* <Image src={node.display_resources[0].src} width='80' height='80' objectFit='contain'/> */}
                            {/* <Image src={`/api/imageproxy?url=${encodeURIComponent(node.display_resources[0].src)}`} width='80' height='80' objectFit='contain'/> */}
                            <Image src={post.media_url} width='80' height='80' objectFit='cover'/>
                            <div className=' pl-4 flex-col items-center'>
                            {/* <p className='text-gray-400 pb-3'> {PreviewSlicer(node.edge_media_to_caption.edges[0]?.node.text)}</p> */}
                            <p className=' hover:text-alt text-gray-300 text-left '> {PreviewSlicer(post.caption)}</p>
                            
                           
                            </div>
                            </div>
                            </Link>
                        </li>
                    );
                })}
                            

{/* <li className='mb-1'><span className='text-gray-400'>{locate}</span><span className='text-gray-400 ml-2'> Address:</span> International House, Holbourn Viaduct, London</li>
<li className='mb-1'><span className='text-gray-400'>{phone}</span><span className='text-gray-400 ml-2'>Phone:</span>070000000000</li>
<li className='mb-1'><span className='text-gray-400'>{email}</span><span className='text-gray-400 ml-2'> Email:</span>hello@runbyinfluencers.com</li> */}

</ul>
    );
};

export default FooterFeed;