import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import FooterFeed from './FooterFeed';
import BlofFooter from './BlofFooter';

const Footer = () => {


    const locate = <FontAwesomeIcon icon={faLocationDot} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    const email = <FontAwesomeIcon icon={faEnvelope} />


    return (
        <div className='bg-primary w-full flex justify-center p-7'>
        <div className='max-w-2xl flex justify-center items-center w-full text-xtiny'>
                
{/* footer item 1 */}
<div className='flex flex-wrap font-light'>
            <div className='flex-col flex p-2  lg:p-6  md:w-1/5 w-full text-white md:text-left text-center '>
                <h2 className='mb-4 font-base uppercase text-sm border-b border-gray-600 md:w-40 pb-2 w-full '>About Us</h2>
                <p>RBI is a digital marketing and influencer management agency. Creating clickable content for brands since 2020, RBI provides full creative campaign oversight, as well as providing an influencer only sourcing service.</p>
                </div>

                {/* footer item 2 */}


                <div className='flex-col flex p-2 lg:p-6  md:w-1/5 w-full text-white md:text-left text-center md:mt-0 mt-7'>

                <h2 className='mb-4 uppercase font-base text-sm border-b border-gray-600 pb-2'>Latest Blog Posts</h2>
                {/* <p className='pb-2'>This is random blog post used for testing the layout of things.<Link href='#'><span className='text-alt'> read more here.</span></Link></p>
                <span className='text-gray-400 '>2 hours ago</span> */}
                <BlofFooter />
                        </div>


                        {/* footer item 3 */}
                        <div className='flex-col p-2 lg:p-6  md:w-1/4 w-full text-white md:text-left text-center md:mt-0 mt-7'>

                        <h2 className='mb-4 uppercase text-sm font-base border-b border-gray-600 pb-2'>Get in touch</h2>
                        <ul>

                            <li className='mb-1'><span className='text-gray-400'>{locate}</span><span className='text-gray-400 ml-2'> Address:</span> International House, Holborn Viaduct, London, EC1A 2BN</li>
                            <li className='mb-1'><span className='text-gray-400'>{phone}</span><span className='text-gray-400 ml-2'>Phone:</span>(+44) 2074382009</li>
                            <li className='mb-1 flex-wrap text-xtiny md:text-mini lg:text-xtiny'><span className='text-gray-400'>{email}</span><span className='text-gray-400 ml-2'> Email:</span>hello@runbyinfluencers.com</li>

                        </ul>

                        </div>

                        {/* footer item 4 */}
                        <div className='flex-col p-2 pr-0 flex lg:p-6  grow md:w-1/4 m:min-w-1/4 w-full text-white shrink-0 md:text-left text-center  md:mt-0 mt-7'>
                        <h2 className='mb-4 uppercase text-sm border-b font-base border-gray-600 pb-2'>Insta feed</h2>
                            
                            {/* <FooterFeed /> */}

                            
                            </div>


           </div>
           </div>

   

    </div>
    );
};

export default Footer;