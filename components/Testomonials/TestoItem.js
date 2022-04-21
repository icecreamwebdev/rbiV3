import React from 'react';
import Image from 'next/image';

const TestoItem = ({brand='Surfshark', author='Test', mainText='blablab friv rvhfv reivh rfvre ovrevf regf rewgfverw0 gver', image,  imgSrc}) => {
    return (
        <div className=' text-center m-4 flex-col items-center justify-between'>
           <div className='bg-white text-xs overflow-hidden text-wrap w-full px-2 md:px-6 py-6 text-left text-primary pl-10 md:pl-10 pb-12 md:min-h-[175px] min-h-[0px] '>

                <p>{mainText}</p>

           </div>

           <div className='bg-primary text-xs w-full px-2 md:px-10 py-2 text-left md:pl-28 pl-28 md:pl-28'>


                <h3 className='text-tiny text-alt'>{brand}</h3>
                <h4 className>{author}</h4>
           </div>

           <div className='w-20 h-20 md:w-22 md:h-22 absolute mt-[-80px] md:mt-[-84px] ml-[10px]  p-2 z-10 rounded-xl md:rounded-3xl bg-primary border-4 border-gray-200  flex justify-center items-center'><img  className='m-auto' src={`/${image}`} width='100' height='100' objectFit='contain' /></div>


           
        </div>
    );
};

export default TestoItem;