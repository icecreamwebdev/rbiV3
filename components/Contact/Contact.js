import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='bg-alt w-full flex justify-center p-7'>
            <div className='max-w-2xl flex flex-col justify-center items-center w-full'>
            
            <h1 className='text-2xl flex justify-center font-base text-center uppercase h-min pb-3 pt-5'>reach out</h1>
            
            <div className='w-20 flex justfiy-center h-0.5 rounded bg-primary m-auto mt-0 pt-0'></div>

            <p className='text-center text-sm text-primary opacity-100 font-light mt-5 mb-7'>Whether your'e a brand or an influencer, please get in touch, we'd love to work together.</p>

                <ContactForm />
        </div>

       

        </div>
    );
};

export default Contact;