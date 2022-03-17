import React from 'react';
import HeroVideo from '../components/Hero/HeroVideo';
import AboutUs from '../components/About/AboutUs';

const about = () => {
    return (
        <div className='h-screen w-full'>

<HeroVideo videoSrc='aboutBackground.mp4' textArray={[
        "dog lovers",
        "tea drinkers",
        "gin enthusiats",
        "gym goers",
        "sun seekers",
        "pet owners",
        "shopaholics",
        "social butterflies",
      ]} />

      <AboutUs />
     </div>
        
    );
};

export default about;