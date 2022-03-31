import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Pinterest from './Pinterest';
import Link from 'next/link';

const Socials = () => {


    const instagram = <FontAwesomeIcon icon={faInstagram} />
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />


    return (
        <div className='bg-white w-full flex justify-center p-7'>
        <div className='max-w-2xl flex flex-col justify-center items-center w-full'>
        
        <h1 className='text-2xl flex justify-center font-base uppercase h-min pb-3 pt-5'>Our Socials</h1>
        <div className='w-20 flex justfiy-center h-0.5 rounded bg-gray-300 m-auto mt-0 pt-0'></div>

        <p className='text-center text-sm text-primary opacity-100 font-light mt-5 md:w-[730px]'>We’re on social media! You can find us on Instagram, LinkedIn, Pinterest and Twitter and see what we’ve been up to.</p>


<div className='w-full flex justify-center items-center'>
        <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:w-[620px] text-left'>


        <div><Link href='https://www.instagram.com/weare_rbi/?hl=en'><div className='h-[50px] cursor-pointer  flex font-light  items-center justify-center'><span className='pr-1'>{instagram}</span>weare_rbi</div></Link></div>
        <div><Link href='https://www.instagram.com/ccalmasmr/?hl=en'><div className='h-[50px] cursor-pointer flex font-light text-center items-center justify-center'><span className='pr-1'>{instagram}</span>ccalmasmr</div></Link></div>
        <div><Link href='https://www.instagram.com/laurenhwoods/?hl=en'><div className='h-[50px] cursor-pointer flex font-light text-center items-center justify-center'><span className='pr-1'>{instagram}</span>laurenhwoods</div></Link></div>
        <div><Link href='https://twitter.com/weare_rbi'><div className='h-[50px] cursor-pointer  flex font-light text-center items-center justify-center'><span className='pr-1'>{twitter}</span>weare_rbi</div></Link></div>
        <div><Link href='https://www.instagram.com/hugothewolf_/?hl=en'><div className='h-[50px] cursor-pointer flex font-light text-center items-center justify-center'><span className='pr-1'>{instagram}</span>hugothewolf_</div></Link></div>

       <div> <Link href='https://www.linkedin.com/company/rbimedia'><div className='h-[50px] cursor-pointer  flex font-light text-center items-center justify-center'><span className='pr-1'>{linkedin}</span>rbimedia</div></Link></div>



            </div>
            </div>

        {/* <div className='w-full bg-green-300 flex mt-10 flex-wrap'>

        

                <div className='h-1/2 w-full flex text-center items-center justify-center bg-yellow-300'>Item 1</div>
                <div className='h-1/2 w-full flex text-center items-center justify-center'>Item 2</div>


                <div className='h-1/2 w-full flex text-center items-center justify-center bg-yellow-300'>Item 1</div>
                <div className='h-1/2 w-full flex text-center items-center justify-center'>Item 2</div>


                <div className='h-1/2 w-full flex text-center items-center justify-center bg-yellow-300'>Item 1</div>
                <div className='h-1/2 w-full flex text-center items-center justify-center'>Item 2</div>

            </div> */}

            <div className='flex w-full h-100 mt-10 mb-10 justify-center'>

                <Pinterest />

                </div>


       </div>

    </div>
    );
};

export default Socials;