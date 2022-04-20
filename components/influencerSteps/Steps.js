import React from 'react';
import Link from 'next/link';

const Steps = () => {
    return (
        <div className='bg-white w-full flex justify-center p-7'>
        <div className='max-w-2xl flex flex-col justify-center items-center w-full'>
        
        <h1 className='text-2xl flex justify-center text-center font-base uppercase h-min pb-3 pt-5'>OUR 4 STEPS TO SPONSORSHIP SUCCESS</h1>
        <div className='w-20 flex justfiy-center h-0.5 rounded bg-gray-300 m-auto mt-0 pt-0'></div>

        <p className='text-center text-sm text-primary opacity-100 font-light mt-5 md:w-[730px]'>RBI offers flexible talent management from non-exclusive to exclusive. Regardless of how you
choose to work with us, you focus on creating content, we’ll handle everything else. Here’s how we work with you
to keep things simple and help you make more from your passion.</p>


<div className='flex w-full flex-wrap xl:mt-16 md:mt-10 mt-8'>


    

       <div className='grid grid-cols-2 lg:grid-cols-4 gap-10 w-full'>


       <div className='p-1 lg:p-3'>
           <div className='flex flex-col w-full'>
               <div className='flex justify-center py-4 text-6xl font-semibold text-alt'>
                   1.
               </div>

                <p className='text-left font-light text-sm flex justify-center'>Whether you’re a YouTube, Instagram or TikTok star we’ll start by analysing your audience demographics to find out what brands would partner best with your channel.</p>
       </div>
       </div>

       <div className='p-1 lg:p-3'>
           <div className='flex flex-col w-full'>
               <div className='flex justify-center py-4 text-6xl font-semibold text-alt'>
                   2.
               </div>

                <p className='text-left font-light text-sm flex justify-center'>If you work with us non-exclusively we’ll start by suggesting you to our existing brands. If you work with us exclusively we’ll discuss your channel goals and reach out to your dream brands to seek our partnership opportunities.</p>
       </div>
       </div>

       <div className='p-1 lg:p-3'>
           <div className='flex flex-col w-full'>
               <div className='flex justify-center py-4 text-6xl font-semibold text-alt'>
                   3.
               </div>

                <p className='text-left font-light text-sm flex justify-center'>When we’ve received an official paid sponsorship opportunity from the client we’ll send you a proposal email. You have the choice to accept or decline - no pressure. If accepted, we’ll handle your contract & all the admin.</p>
       </div>
       </div>

       <div className='p-1 lg:p-3'>
           <div className='flex flex-col w-full'>
               <div className='flex justify-center py-4 text-6xl font-semibold text-alt'>
                   4.
               </div>

                <p className='text-left font-light text-sm flex justify-center'>We then provide you with your sponsorship brief that gives you all the information needed to create your ad. We’ll be there to offer support whenever you need it. Once the ad has gone live, we’ll invoice the brand and ensure payment terms are met. Easy!</p>
       </div>
       </div>





           </div>


            </div>

            <Link href='./contact'><div className='flex justify-center cursor-pointer bg-alt hover:opacity-80 text-white uppercase rounded-3xl mt-16 p-2 px-5 text-sm mb-10'>Work with us</div></Link>

            </div>
            </div>
    );
};

export default Steps;