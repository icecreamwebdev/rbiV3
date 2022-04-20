import React from 'react';
import FounderItem from './FounderItem';
import Image from 'next/image';

const Founders = () => {

    return (
        <div className='bg-white w-full flex justify-center p-7'>
            <div className='max-w-2xl flex flex-col justify-center items-center w-full'>
            
            <h1 className='text-2xl flex justify-center font-base text-center uppercase h-min pb-3 pt-5'>say hello to our founders!</h1>
            <div className='w-20 flex justfiy-center h-0.5 rounded bg-gray-300 m-auto mt-0 pt-0'></div>

            <p className='text-center text-sm text-primary opacity-100 font-light mt-5'>“They’re the best and we love them” - RBI team members, who definitely weren’t forced to say that...</p>
          

            <div className='flex justify-around  flex-wrap w-full mb-10 md:w-[650px]'>
            <FounderItem founderImg='/founder1.jpg' name='Lauren Cassidy' bodyText='Serious dog mum and early morning human.' />
            <FounderItem founderImg='/founder2.png' name='Lucy Harper' bodyText='Can’t get through a meeting without a tea...or 10.' />
            </div>

        </div>

       

        </div>
    );
};

export default Founders;