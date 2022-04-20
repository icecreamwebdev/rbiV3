import React from 'react';
import Image from 'next/image';

const InfluencerBrands = () => {

    const brands = []

    for (let brand = 1; brand < 27; brand++){

        brands.push(`brand${brand}.png`)
    }

    console.log(brands)
    return (
        <>

<div className='bg-primary w-full flex justify-center p-7 z-10'>
        <div className='max-w-2xl flex flex-col justify-center items-center w-full'>
        


        
        <h1 className='text-2xl flex justify-center font-base uppercase h-min pb-3 pt-5 text-alt '>work with GLOBAL brands</h1>
        <div className='w-20 flex justfiy-center h-0.5 rounded bg-gray-300 m-auto mt-0 pt-0'></div>

        <p className='text-center text-sm text-gray-100 opacity-80 font-light mt-5'>From fashion to fitness, gaming to online services - we’ll connect you with incredible global brands to suit your goals.</p>


        <div className='flex flex-wrap flex-row w-full justify-center mt-10 mb-10'>
            


           {brands.map((b) => {

               return <div className='flex justify-center m-3 items-center h-12'><img src={`../brands/${b}`} width='120' height='100' objectFit='contain'/></div>
           })}

            </div>







        </div>
        
        </div>

       
            
        </>
    );
};

export default InfluencerBrands;