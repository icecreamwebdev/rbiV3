import React from 'react';
import Contact from '../components/Contact/Contact';
import Head from 'next/head';

const contact = () => {
    return (
        <>
        <Head>
        <title>Contact Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="UTF-8" />
        <meta name="description" content="RBI influencer and digital marketing agency contact page. Includes a contact form and RBI’s contact information. " />
        <meta name="keywords" content="Contact us influencer influencers digital social brands content creators" />
      </Head>
        <Contact />
        </>
         
    );
};

export default contact;