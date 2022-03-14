import React, { useState } from 'react';
import HeroText from './HeroText';
import Image from 'next/image';
import AutoPlaySilentVideo from './AutoPlayVideo';

const HeroVideo = () => {

const [hasLoaded, setLoaded] = useState(false)

   console.log(hasLoaded)

    return (
<>

{/* <div className='videoOuter'
          dangerouslySetInnerHTML={{
            __html: `<video autoplay playsinline muted loop src='/homeBackground.mp4' type="video/mp4" />`,
          }}
        /> */}
<div className='videoOuter' dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          onload='${()=>setLoaded(true)}'
          src="homebackground.mp4"
        />,
      ` }}></div>

      {console.log(hasLoaded)}


            {/* <video src="homebackground.mp4"  className='w-screen h-2/3 md:h-[500px] brightness-[.9] z-15 max-w-4xl scale-100 relative m-auto object-cover overflow-hidden'
 loop autoPlay muted playsinline>
             <source src="homebackground.mp4" type="video/mp4" /> 
             </video> */}

             {/* <AutoPlaySilentVideo /> */}

                   
{/* </video> */}

<HeroText loaded={hasLoaded}/>

</>

    );
};

export default HeroVideo;