import React from 'react';
import Steps from '../components/influencerSteps/Steps';
import HeroVideo from '../components/Hero/HeroVideo';
import InfluencerBrands from '../components/Brands/InfluencerBrands';
import Faqs from '../components/faqs/Faqs';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Policies from '../components/Policies/Policies';
import Head from 'next/head';

const influencers = () => {
    return (
        <div className='h-screen w-full'>

<Head>
        <title>Influencers</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="UTF-8" />
        <meta name="description" content="Webpage for influencers and content creators. Information about RBI’s influencer management services and FAQs for content creation and campaign management. " />
        <meta name="keywords" content="influencer influencers digital social brands content creators" />
      </Head>

            <HeroVideo textArray={[
        "Vloggers",
        "Fashionistas",
        "Gamers",
        "ASMRtists",
        "Comedians",
        "Trend Setters",
      ]} videoSrc={'/influencerBackground.mp4'} />
            <Steps />
            <InfluencerBrands />
            <Faqs />
            <Contact />
            <Footer />
            <Policies />
        </div>
    );
};

export default influencers;