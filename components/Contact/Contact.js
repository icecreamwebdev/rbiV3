import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='bg-alt w-full flex justify-center p-7'>
            <div className='max-w-2xl flex flex-col justify-center items-center w-full'>
            
            <h1 className='text-2xl flex justify-center font-base text-center uppercase h-min pb-3 pt-5'>reach out</h1>
            

                <ContactForm />
        </div>

       

        </div>
    );
};

export default Contact;