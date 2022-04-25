import React from 'react';
import HeroVideo from '../components/Hero/HeroVideo';
import AboutUs from '../components/About/AboutUs';
import FloofMembers from '../components/Floof/FloofMembers';
import Socials from '../components/AboutSocials/Socials';
import Footer from '../components/Footer/Footer';
import Policies from '../components/Policies/Policies';
import Head from 'next/head';

const about = () => {
    return (
        <div className='h-screen w-full'>
                  <Head>
        <title>About Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="UTF-8" />
        <meta name="description" content="RBI influencer and digital marketing agency about us page. Information about RBI’s company structure and team members. RBI was founded in 2020 and has worked on over 50 influencer marketing campaigns." />
        <meta name="keywords" content="about influencer influencers digital social brands content creators" />
      </Head>
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