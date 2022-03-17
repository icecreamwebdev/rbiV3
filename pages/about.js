import React from 'react';
import HeroVideo from '../components/Hero/HeroVideo';
import AboutUs from '../components/About/AboutUs';
import FloofMembers from '../components/Floof/FloofMembers';
import Socials from '../components/AboutSocials/Socials';
import Footer from '../components/Footer/Footer';
import Policies from '../components/Policies/Policies';
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
      <FloofMembers />
      <Socials />
      <Footer />
      <Policies />

     </div>
        
    );
};

export default about;