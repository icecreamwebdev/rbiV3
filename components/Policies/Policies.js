import React from 'react';
import Link from 'next/link';

const policies = () => {
    return (
        <div className='bg-[#3c3d3e] opacity-90 md:flex-row  flex flex-col px-7 py-5  justify-between'>


            <p className='text-white text-center'>
                RBI Media Limited | 2022
            </p>

            <ul className='flex text-gray-400 font-light pt-3 md:pt-0 justify-center'>
                <li><Link href='#'>Terms Of Use</Link></li>
                <li className='pl-4'><Link href='#'>Privacy Policy</Link></li>
                </ul>

        </div>
    );
};

export default policies;