import React from 'react';
import Image from 'next/image';
import PreviewSlicer from '../../utils/PreviewSlicer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faComment, faHeart } from '@fortawesome/free-solid-svg-icons';


const FooterFeed = () => {


    const posts = [{img: 'safetyBackground.jpeg', comments: 0, likes: 1, caption: 'This is my first post of a test account'},{img: 'safetyBackground.jpeg', comments: 0, likes: 0, caption: 'This is my second post of a test account, used to test out api calls and design'}]
    const commentIcon = <FontAwesomeIcon icon={faComment} />
    const likeIcon = <FontAwesomeIcon icon={faHeart} />

    if (!posts){

        return <ul></ul>
    }
    return (
        <ul>

                            {posts.slice(0,2).map((post, i) => {
                    return (
                        <li key={i}>
                            <div className='flex pt-3 text-xtiny shrink-0 justify-left'>
                            {/* <Image src={node.display_resources[0].src} width='80' height='80' objectFit='contain'/> */}
                            {/* <Image src={`/api/imageproxy?url=${encodeURIComponent(node.display_resources[0].src)}`} width='80' height='80' objectFit='contain'/> */}
                            <Image src='/safetyBackground.jpg' width='80' height='80' objectFit='cover'/>
                            <div className=' pl-4 flex-col'>
                            {/* <p className='text-gray-400 pb-3'> {PreviewSlicer(node.edge_media_to_caption.edges[0]?.node.text)}</p> */}
                            <p className='text-gray-400 pb-3'> {PreviewSlicer(post.caption)}</p>
                            
                            <div className='flex text-left'>
                            {/* <p className='pr-3 text-xtiny max-h-[10px]'><span className='mr-1'>{likeIcon}</span>{node.edge_media_preview_like.count}</p> */}
                            {/* <p className='pr-3 text-xtiny max-h-[10px]'><span className='mr-1'>{likeIcon}</span>{node.edge_media_preview_like.count}</p> */}
                            <p className='pr-3 text-xtiny max-h-[10px]'><span className='pr-1' >{commentIcon}</span>{post.comments}</p>
                            <p className='pr-3 text-xtiny max-h-[10px]'><span className='pr-1 text-xtiny max-h-[10px]'>{likeIcon}</span>{post.likes}</p>
                            </div>
                            </div>
                            </div>
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