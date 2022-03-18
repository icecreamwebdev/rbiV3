import React from 'react';
import HeroVideo from '../components/Hero/HeroVideo';
import StatsThatMatter from '../components/Stats/StatsThatMatter';

const caseStudies = () => {
    return (
        <div className='h-screen w-full'>

        <HeroVideo textArray={['rbi']} />
        <StatsThatMatter />
        </div>

    );
};

export default caseStudies;