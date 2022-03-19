import React from 'react';
import HeroVideo from '../components/Hero/HeroVideo';
import StatsThatMatter from '../components/Stats/StatsThatMatter';
import CaseStudies from '../components/CaseStudies/CaseStudies';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const caseStudies = () => {
    return (
        <div className='h-screen w-full'>

        <HeroVideo textArray={['rbi']} videoSrc={'/caseStudiesBackground.mp4'} />
        <StatsThatMatter />
        <CaseStudies />
        <Contact />
        <Footer />
        </div>

    );
};

export default caseStudies;