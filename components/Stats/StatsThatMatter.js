import React from 'react';
import StatsBar from './StatsBar';


  // Animation

// Radial separators


const StatsThatMatter = () => {

    const percentage = 66;

    return (
        <div className='bg-white w-full flex justify-center p-7'>
        <div className='max-w-2xl flex flex-col justify-center items-center w-full'>
        
        <h1 className='text-2xl flex justify-center font-base uppercase h-min pb-3 pt-5'>stats that matter</h1>
        <div className='w-20 flex justfiy-center h-0.5 rounded bg-gray-300 m-auto mt-0 pt-0'></div>

        <p className='text-center text-sm text-primary opacity-100 font-light mt-5 md:w-[730px]'>Influencer marketing is a form of digital marketing that continues to boom.
Here are just a few statistics showcasing why your brand should try influencer marketing for your next campaign.</p>


<div className='flex w-full flex-wrap xl:mt-16 md:mt-10 mt-8'>


        <div className='w-1/2 md:w-1/4 md:h-60 xl:h-80  flex  flex-col'>


                <div className='w-full  '>
                        <StatsBar duration={2} level={99} text={'$15 BILLION'} />
                    </div>

                    <p className='text-center text-xs font-light p-2'>
                    Brands will spend up to $15 billion 
on influencer marketing by 2022. 
(Source: Business Insider)
                    </p>
            </div>

        
<div className='w-1/2 md:w-1/4 md:h-60 xl:h-80  flex flex-col'>

<div className='w-full '>
                        <StatsBar duration={1.2} level={60} text={'60%'} />
                    </div>

                    <p className='text-center text-xs font-light p-2'>
                    60% of millennials are more likely to 
take advice from YouTube influencers 
than traditional media personalities
(source: variety)
                    </p>
</div>

<div className=' w-1/2 md:w-1/4 md:h-60 xl:h-80  flex flex-col'>
<div className='w-full  '>
                        <StatsBar duration={2} level={100} text={'11X GREATER'} />
                    </div>

                    <p className='text-center text-xs font-light p-2'>
                    Influencer marketing ROI is 11x greater 
than banner ads
(source: convince&convert)
                    </p>
</div>

<div className='w-1/2 md:w-1/4 md:h-60 xl:h-80  flex flex-col'>

<div className='w-full '>
                        <StatsBar duration={1.2} level={80} text={'80%'} />
                    </div>

                    <p className='text-center text-xs font-light p-2'>
                    80% of consumers have purchased 
something via an influencer 
recommendation
(source: rakuten)
                    </p>
</div>




</div>

</div>
</div>
    );
};

export default StatsThatMatter;