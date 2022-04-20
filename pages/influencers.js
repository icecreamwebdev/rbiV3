import React from 'react';
import Steps from '../components/influencerSteps/Steps';
import HeroVideo from '../components/Hero/HeroVideo';
import InfluencerBrands from '../components/Brands/InfluencerBrands';
import Faqs from '../components/faqs/Faqs';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Policies from '../components/Policies/Policies';

const influencers = () => {
    return (
        <div className='h-screen w-full'>
            <HeroVideo textArray={[
        "Create",
        "Influence",
        "Innovate",
        "Communicate",
        "Promote",
        "Create",
        "Influence",
        "Innovate",
        "Communicate",
        "Promote",
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