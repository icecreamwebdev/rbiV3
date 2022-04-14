import React from 'react';
import Image from 'next/image';

const TestoItem = ({brand='Surfshark', author='Test', mainText='blablab friv rvhfv reivh rfvre ovrevf regf rewgfverw0 gver', imgSrc}) => {
    return (
        <div className=' text-center m-4 flex-col items-center justify-between'>
           <div className='bg-white text-xs overflow-hidden text-wrap w-full px-2 md:px-6 py-6 text-left text-primary pl-24 md:pl-28 md:min-h-[175px] min-h-[0px] '>

                <p>{mainText}</p>

           </div>

           <div className='bg-primary text-xs w-full px-2 md:px-10 py-6 text-left pl-24 md:pl-28'>


                <h3 className='text-tiny text-alt'>{brand}</h3>
                <h4>{author}</h4>
           </div>

           <div className='w-16 h-16 md:w-20 md:h-20 absolute mt-[-110px] md:mt-[-125px] ml-[10px] z-10 rounded-xl md:rounded-3xl bg-gray-500 border-4 border-gray-200'><Image className='rounded-3xl' src='/safetyBackground.jpg' layout='fill' objectFit='cover' /></div>


           
        </div>
    );
};

export default TestoItem;