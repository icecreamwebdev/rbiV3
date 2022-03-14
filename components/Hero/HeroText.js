import TextTransition, { presets } from "react-text-transition";
import React, { useEffect } from "react";

const HeroText = () => {

    const TEXTS = [
        " Create",
        " Source",
        " Influence",
        " Manage",
        "Analyse",
        "Succeed",
        " Create",
        " Source",
        " Influence",
        " Manage",
        "Analyse",
        "Succeed",
        
      ];



      const [index, setIndex] = React.useState(0);


      useEffect(() => {
        let timer;
        let counter = 0
        setTimeout(() => {
          timer = setInterval(() => {
            if (counter < 12){
            setIndex(i => i + 1);
            counter ++;
            }
          }, 180);
        }, 1000);
        return () => clearInterval(timer);
      }, []);
    

      const rotatingText =  <div><span className='font-light text-white uppercase'>We</span>
      <span className='text-alt pl-3 leading-tight drop-shadow-sm font-semibold uppercase'>{TEXTS[index]}</span></div>
      const stillText =  <div><span className='font-light text-white uppercase'>We are</span>
      <span className='text-alt pl-3 leading-tight drop-shadow-sm font-semibold uppercase'>RBI</span></div>
      console.log(index)
 


    return (
      <div className='absolute w-full top-[270px] md:top-[280px]'>
        <h1 className='flex h-20 items-center justify-center text-4xl md:text-5xl'>

            {index > 11 ? stillText : rotatingText
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