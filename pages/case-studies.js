import React from 'react';
import HeroVideo from '../components/Hero/HeroVideo';
import StatsThatMatter from '../components/Stats/StatsThatMatter';
import CaseStudies from '../components/CaseStudies/CaseStudies';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Policies from '../components/Policies/Policies';
import Head from 'next/head';

const caseStudies = () => {
    return (
        <div className='h-screen w-full'>
<Head>
        <title>Case Studies</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="UTF-8" />
        <meta name="description" content="Case studies page for influencer marketing showcasing RBI’s digital marketing campaign examples on YouTube, Instagram and TikTok. Statistics included to show social media campaign reach and success. " />
        <meta name="keywords" content="Case studies influencer influencers digital social brands content creators" />
      </Head>
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
      ]} videoSrc={'/caseStudiesBackground.mp4'} />
        <StatsThatMatter />
        <CaseStudies />
        <Contact />
        <Footer />
        <Policies />
        </div>

    );
};

export default caseStudies;