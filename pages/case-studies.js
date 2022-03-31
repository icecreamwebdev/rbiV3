import React from 'react';
import HeroVideo from '../components/Hero/HeroVideo';
import StatsThatMatter from '../components/Stats/StatsThatMatter';
import CaseStudies from '../components/CaseStudies/CaseStudies';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Policies from '../components/Policies/Policies';

const caseStudies = () => {
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