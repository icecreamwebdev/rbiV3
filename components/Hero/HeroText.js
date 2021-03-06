import TextTransition, { presets } from "react-text-transition";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const HeroText = ({textArray, page}) => {




    const TEXTS = textArray;
    const arrayLength = TEXTS.length;

    const weAre = (page == '/about') || (page == '/influencers')

    const speed = weAre ? 150 : 150
    const sizing = weAre  ? 'text-2xl' : 'text-4xl'

   

      const [index, setIndex] = React.useState(0);


      useEffect(() => {
        let timer;
        let counter = 0
        setTimeout(() => {
          timer = setInterval(() => {
            if (counter < arrayLength){
            setIndex(i => i + 1);
            counter ++;
            }
          }, speed);
        }, 950);
        return () => clearInterval(timer);
      }, []);
    

      const rotatingText =  <div><span className='font-light text-white uppercase'>{!weAre ? 'We' : 'We Are'}</span>
      <span className='text-alt pl-2 leading-tight drop-shadow-sm font-semibold uppercase'>{TEXTS[index]}</span></div>
      const stillText =  <div><span className='font-light text-white uppercase'>We are</span>
      <span className='text-alt pl-2 leading-tight drop-shadow-sm font-semibold uppercase'>RBI</span></div>
 


    return (
      <div className='absolute w-full top-[270px] md:top-[280px]'>
        <h1 className={`flex h-20 items-center justify-center ${sizing} md:text-5xl`}>

            {(index > arrayLength-1 || index == 0) ? stillText : rotatingText
    }
              {/* <span className='font-light text-white uppercase'>We</span>
            <span className='text-alt pl-3 leading-tight drop-shadow-sm font-semibold uppercase'>
      {index > 11 ? TEXTS[0] : TEXTS[index]}
      </span> */}
    </h1>
    </div>
    );
};

export default HeroText;