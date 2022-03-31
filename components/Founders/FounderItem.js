import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FounderItem = ({name, founderImg, bodyText }) => {
    return (

        // w-[220px] md:w-[250px]
        <div className='flex flex-col items-center p-5 px-6 mt-10  flex-wrap w-3/4 sm:w-3/5 md:w-[290px] shrink-0 border rounded border-gray-300 shadow-sm'>


               
            <Image src={founderImg} width='350' height='380' objectFit='cover' />
           

            <div className='mt-4 w-full'>
            <h2 className='text-left justify-left w-full font-base'>{name}</h2>

            <p className='text-left text-tiny w-full mt-1 font-light'>Co-founder</p>

                <p className='w-full pt-3 text-xs text-primary flex-wrap font-light'>{bodyText} <Link href='/about'><span className=' cursor-pointer text-alt'>Click</span></Link> to learn more.</p>
            
                <Link href='/about'><p className='text-right cursor-pointer pt-4'><span className=' bg-alt p-2 py-1 rounded-full text-orange-100 text-center items-center justify-center '>{'>'}</span></p></Link>
            </div>
        </div>
    
    );
};

export default FounderItem;