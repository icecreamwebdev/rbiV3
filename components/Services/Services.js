import React from 'react';
import ServicesIconSec from './ServicesIconSec';
import Link from 'next/link';

const Services = () => {
    return (
        <div className='bg-white w-full flex justify-center p-7'>
            <div className='max-w-2xl flex flex-col justify-center items-center w-full'>
            
            <h1 className='text-2xl flex justify-center font-base uppercase h-min pb-3 pt-5'>Our Services</h1>
            <div className='w-20 flex justfiy-center h-0.5 rounded bg-gray-300 m-auto mt-0 pt-0'></div>

            <p className='text-center text-sm text-primary opacity-100 font-light mt-5'>RBI is a digital marketing and influencer management agency.<br />
From creating a clickable social campaign to sourcing talent, RBI has you covered.</p>



        <ServicesIconSec />

        <Link href='/case-studies'><div className='flex justify-center cursor-pointer bg-alt hover:opacity-80 text-white uppercase rounded-3xl mt-16 p-2 px-5 text-sm mb-10'>Case studies</div></Link>
        </div>

        </div>
    );
};

export default Services;
