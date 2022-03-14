import React, { useState } from 'react';
import AutoPlay from '../Slider';
import getWindowSize from '../../utils/GetWindowSize';
import { useEffect } from 'react';


const Brands = () => {

    const [width, setWidth] = useState(0)

    useEffect(()=> {

        setWidth(()=> getWindowSize())

    }, [])

  
    return (
        <>
        <div className='bg-primary w-full flex justify-center p-7 z-10'>
        <div className='max-w-2xl flex flex-col justify-center items-center w-full'>
        
        
        <h1 className='text-2xl flex justify-center font-base uppercase h-min pb-3 pt-5 text-alt '>Our Clients</h1>
        <div className='w-20 flex justfiy-center h-0.5 rounded bg-gray-300 m-auto mt-0 pt-0'></div>

        <p className='text-center text-sm text-gray-100 opacity-80 font-light mt-5'>Helping clients reach their digital marketing goals is what makes us tick.</p>

        </div>

        

        
        </div>

       
        <div className='bg-primary py-10 w-full pb-10'>
        <AutoPlay width={width} />
        </div>
        </>

        
    );
};

export default Brands;