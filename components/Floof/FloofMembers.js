import React from 'react';
import Image from 'next/image';
import FloofSlider from './FloofSlider';
import getWindowSize from '../../utils/GetWindowSize';
import { useState } from 'react';
import { useEffect } from 'react';

const FloofMembers = () => {

    const [width, setWidth] = useState(0)

    useEffect(()=> {

        setWidth(()=> getWindowSize())

    }, [])


    return (
        <div className='bg-primary w-full flex  justify-center p-7 z-10'>
        <div className='max-w-2xl flex flex-col justify-center items-center w-full'>
        
        
        <h1 className='text-2xl flex justify-center font-base uppercase h-min pb-3 pt-5 text-white '>Star Team Members</h1>
        <div className='w-20 flex justfiy-center h-0.5 rounded bg-gray-300 m-auto mt-0 pt-0'></div>

        <p className='text-center text-sm text-gray-100 opacity-80 font-light mt-5'>Showcasing members of our team who are doing a pawsome job in their RBI roles.</p>


        <div className='flex flex-col md:flex-row  w-full  mt-10 justify-between items-center text-white'>

            <div className='flex flex-col justify-center m-auto w-4/5 md:w-1/2  mx-5 xl:mr-14'>

            <div className='flex'>
            <div className='flex  w-1/2 mr-2'>
            <Image src='/founder1.png' width='220' height='220' objectFit='cover' />

            </div>

            <div className='flex w-1/2 ml-2 justify-center items-center bg-white'>
            <Image src='/founder1.png' width='70' height='70' objectFit='contain' />

            </div>
            </div>

            <div className='flex-col mt-3'>
            <h2 className='font-semibold uppercase'>Hugo</h2>
            <p className='text-sm font-base'>Chief Treat Officer</p>
            <p className='text-tiny font-light mt-2 text-gray-300'>Responsible for ensuring the biscuit tin is always stocked.
Excellent at communicating when it’s dinner time.
Privy to a ‘lick’ of wine if mum accidentally leaves in reach.
</p>
            </div>



            </div>

            <div className='flex flex-col w-4/5 md:w-1/2 mt-10 md:mt-0  mx-5 xl:ml-14'>

            <div className='flex'>
            <div className='flex  w-1/2 mr-2'>
            <Image src='/founder1.png' width='220' height='220' objectFit='cover' />

            </div>

            <div className='flex  w-1/2 ml-2 justify-center items-center bg-white'>
            <Image src='/founder1.png' width='70' height='70' objectFit='contain' />

            </div>
            </div>

            <div className='flex-col mt-3'>
            <h2 className='font-semibold uppercase'>LINDI</h2>
            <p className='text-sm font-base'>Director of Playtime</p>
            <p className='text-tiny font-light mt-2 text-gray-300'>Responsible for ensuring the biscuit tin is always stocked.
Excellent at communicating when it’s dinner time.
Privy to a ‘lick’ of wine if mum accidentally leaves in reach.
</p>
            </div>



            </div>
            </div> 

{/*  
        <div className='flex w-full bg-blue-300 mt-10 justify-between'>


<div className='flex-col flex w-1/2  bg-red-300 mr-3'>



        <div className='flex w-full h-full'>
    <div className='flex w-1/2 bg-green-300 h-full mx-1'>

        <Image src='/founder1.png' width='250' height='250' objectFit='cover' />
    </div>

    <div className='flex w-1/2 bg-white h-full justify-center items-center mx-1'>

    <Image src='/founder1.png' width='70' height='70' objectFit='contain' />


    </div>

</div>


<div className='flex-col flex w-full bg-green-500'>
   <h2>A bunch of text</h2>
   <p>more text bla bla bla bkla more text bla bla</p>
   <p className='font-light'>more text bla bla bla bkla more text bla bla more text bla bla bla bkla more text bla bla more text bla bla bla bkla more text bla bla</p>

    </div>


    </div>

    <div className='flex-col flex w-1/2 h-full bg-red-300 ml-3'>



    <div className='flex w-full h-full'>
    <div className='flex w-1/2 bg-green-300 h-full mx-1'>

        <Image src='/founder1.png' width='250' height='250' objectFit='cover' />
    </div>

    <div className='flex w-1/2 bg-white h-full justify-center items-center mx-1'>

    <Image src='/founder1.png' width='70' height='70' objectFit='contain' />


    </div>

</div>


<div className='flex-col w-full  bg-red-500 '>
   <h2 className='pt-0'>A bunch of text</h2>
   <p>more text bla bla bla bkla more text bla bla</p>
   <p className='font-light'>more text bla bla bla bkla more text bla bla more text bla bla bla bkla more text bla bla more text bla bla bla bkla more text bla bla</p>
    </div>


    </div>

    </div> */}

<h2 className='text-2xl flex justify-center mt-20 pb-2 font-base uppercase h-min  pt-5 text-alt '>RBI FLoofs</h2>

<FloofSlider width={width} />
     
        </div>
        
        </div>
    );
};

export default FloofMembers;