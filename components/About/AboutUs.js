import React, { useState } from 'react';
import Image from 'next/image';
import ReactCardFlip from 'react-card-flip';
import debounce from 'lodash.debounce';
import getWindowSize from '../../utils/GetWindowSize';
import { useEffect } from 'react';


const AboutUs = () => {


    const [isFlipped1, setFlipped1] = useState(false)
    const [isFlipped2, setFlipped2] = useState(false)

    const [windowSize, setWindowSize] = useState(0)

    const debouncedHandleMouseEnter = debounce(() => setFlipped1(true), 50);

    const handlOnMouseLeave = () => {
        setFlipped1(false);
        debouncedHandleMouseEnter.cancel();
      };

      useEffect(() => {

        setWindowSize(getWindowSize())

      },[])

      const debouncedHandleMouseEnter1 = debounce(() => setFlipped2(true), 100);

      const handlOnMouseLeave1 = () => {
          setFlipped2(false);
          debouncedHandleMouseEnter.cancel();
        }


    const handleFLip1 = (e) => {

        e.preventDefault()
        setFlipped1(()=> !isFlipped1)
    }

    const handleFLip2 = (e) => {

        e.preventDefault()
        setFlipped2(()=> !isFlipped2)
    }

    // console.log('window size is: ' + getWindowSize())



    return (
        <div className='bg-white w-full flex justify-center p-7'>
        <div className='max-w-2xl flex flex-col justify-center items-center w-full'>
        
        <h1 className='text-2xl flex justify-center font-base uppercase h-min pb-3 pt-5'>About Us</h1>
        <div className='w-20 flex justfiy-center h-0.5 rounded bg-gray-300 m-auto mt-0 pt-0'></div>


        <div className='w-full h-full  mt-7 flex flex-col md:flex-row'>

          


            <div className='flex-col w-full md:w-1/2 md:pr-5 flex items-between justify-between' >

        <div className='flex w-full h-[250px]  mb-5'>


        {console.log(windowSize)}

        <div className='flex w-full h-full bg-primary p-2 mr-2 justify-center' onMouseEnter={windowSize < 769? null : debouncedHandleMouseEnter}
      onMouseLeave={windowSize < 769? null : handlOnMouseLeave} onClick={windowSize < 769? handleFLip1 : null}>

<ReactCardFlip isFlipped={isFlipped1} flipDirection="vertical">

<div className='flex w-full h-full justify-center' >
    <Image src='/founder1.png' width='250' height='250' objectFit='cover'/>
    </div>


    <div className='flex w-full h-full justify-center' >
    <Image src='/founder2.png' width='250' height='250' objectFit='cover'/>
    <div className='absolute w-full h-full bg-alt text-white text-center justify-center flex-col items-center flex m-auto' >
        <h2 className='font-bold mb-2'>Lauren Cassidy</h2>
        <p className='font-light'>Hello this is some text</p>
        <p className='font-light'>'some quote'</p>
    
    
    </div>
  
    </div>

</ReactCardFlip>
</div>













<div className='flex w-full h-full bg-primary p-2 mr-2 justify-center' onMouseEnter={windowSize < 769? null : debouncedHandleMouseEnter1}
      onMouseLeave={windowSize < 769? null : handlOnMouseLeave1} onClick={windowSize < 769? handleFLip2 : null}>
<ReactCardFlip isFlipped={isFlipped2} flipDirection="vertical">

<div className='flex w-full h-full'  >
    <Image src='/founder2.png' width='250' height='250' objectFit='cover'/>
  
    </div>


    <div className='flex w-full h-full' >
    <Image src='/founder1.png' width='250' height='250' objectFit='cover'/>
    <div className='absolute w-full h-full bg-alt text-white text-center justify-center flex-col items-center flex m-auto' >
        <h2 className='font-bold mb-2'>Lucy Harper</h2>
        <p className='font-light'>Hello this is some text</p>
        <p className='font-light'>'some quote'</p>
    
    
    </div>
  
    </div>

</ReactCardFlip>
</div>

            
            </div>
                
    

        <div className='flex w-full h-1/3 bg-alt items-center text-center px-4 py-4'>
            'this is a quote bla bla bla look its a quote bla bla bla, the team are great - Emilie Board, Influencer Executive'
            </div>
            
            </div>

                <div className='flex w-full mt-10 md:mt-0 md:w-1/2 xl:text-sm font-light text-sm md:text-xs lg:text-tiny p-1 md:pl-4'>
                <p>With a combined 10+ years of marketing experience, RBI was established 
by founders Lauren Cassidy and Lucy Harper in early 2020 and has been 
growing ever since. Lauren and Lucy are both content creators and 
between them have over 1M followers, 200M views and have worked on 
over 100 brand collaborations.  <br /> <br />

RBI is a hybrid of digital marketing and influencer management, offering 
a one stop shop for all of your digital marketing needs. Alongside Lauren 
and Lucy, the team consists of Campaign Managers, Influencer Executives 
and Outreach Executives. Our team are highly skilled in digital marketing 
and are also experienced content creators, giving RBI it’s USP.
Plus, they’re not only superstars, they’re also really enthusiastic,
friendly, passionate about what they do and a joy to work with too! <br /> <br />

Based in London, we work with clients from across the globe and use a 
flexible working model to ensure we are there for you regardless of the 
time zone. We’re extremely dedicated to our clients and maintaining a 
close relationship is key for us at RBI.
You’ll never be just a number with us.</p>

                    </div>

        </div>




        </div>
        </div>
    );
};

export default AboutUs;