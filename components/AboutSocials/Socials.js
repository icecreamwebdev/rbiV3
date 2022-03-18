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


        <div className='lg:w-[998px]   flex mt-10 flex-wrap'>


        <Link href='#'><div className='h-[50px] cursor-pointer w-1/2 md:w-1/3 flex font-light text-center items-center justify-center'><span className='pr-1'>{instagram}</span>Item 1</div></Link>
        <Link href='#'><div className='h-[50px] cursor-pointer w-1/2 md:w-1/3 flex font-light text-center items-center justify-center'><span className='pr-1'>{instagram}</span>Item 1</div></Link>
        <Link href='#'><div className='h-[50px] cursor-pointer w-1/2 md:w-1/3 flex font-light text-center items-center justify-center'><span className='pr-1'>{instagram}</span>Item 1</div></Link>
        <Link href='#'><div className='h-[50px] cursor-pointer w-1/2 md:w-1/3 flex font-light text-center items-center justify-center'><span className='pr-1'>{instagram}</span>Item 1</div></Link>
        <Link href='#'><div className='h-[50px] cursor-pointer w-1/2 md:w-1/3 flex font-light text-center items-center justify-center'><span className='pr-1'>{twitter}</span>Item 1</div></Link>
        <Link href='#'><div className='h-[50px] cursor-pointer w-1/2 md:w-1/3 flex font-light text-center items-center justify-center'><span className='pr-1'>{linkedin}</span>Item 1</div></Link>



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