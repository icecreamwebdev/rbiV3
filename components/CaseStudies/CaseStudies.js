import React from 'react';
import Image from 'next/image';
import YoutubeEmbedd from './YoutubeEmbedd';
import InstagramEmbed from './InstagramEmbed';

const CaseStudies = () => {

    
    return (
        <div className='bg-primary w-full flex  justify-center p-7 z-10'>
        <div className='max-w-2xl flex flex-col justify-center items-center w-full'>
        
        
        <h1 className='text-2xl flex justify-center font-base uppercase h-min pb-3 pt-5 text-alt '>Case Studies</h1>
        <div className='w-20 flex justfiy-center h-0.5 rounded bg-gray-300 m-auto mt-0 pt-0'></div>

        <p className='text-center text-sm text-gray-100 opacity-80 font-light mt-5'>We’ve worked with over 50 brands to create engaging digital campaigns.
Check out some of our favourites below.</p>




        <div className='w-full  mt-10 flex flex-col '>


{/* start of Video Section  */}

            <div className='w-full flex p-2  md:flex-row flex-col bg-alt mb-6 '>


                <div className='md:w-7/12 w-full h-full relative '>

                    <YoutubeEmbedd id='rBKJe7JtVu4' />

                    </div>

                    <div className='md:w-5/12 h-full flex flex-col items-center justify-center text-white p-10  bg-primary '>

                        <h2 className='flex text-white mb-3 uppercase items-center text-xl justify-center'>CLIENT: <span className='flex items-center pl-2'><Image src='/brands/brand10.png' width='80' height='18' objectFit='contain' /></span></h2>
                        <p className='font-semibold text-center text-sm'>Campaign goal: Increase brand visbility during Black Friday sales.</p>

                        <ul className='font-light text-xs mt-4 list-disc  pl-4 text-left w-full'>

                            <li>Platforms: Youtube (with Instagram story accompaniment)</li>
                            <li>Ad style: pre-roll, mid-roll & Instagram story</li>
                            <li>7 influencer activations</li>
                            <li>Campaign results: <br /><br /> <div className=' text-right'><ul >
                                
                                 <li>Youtube Views: <span className='text-alt'>1,385,000</span></li>
                                 <li>Likes: <span className='text-alt'>40.6K</span></li>
                                 <li>Comments: <span className='text-alt'>1,966</span></li>
                                 
                                 </ul>
                                 
                                 </div></li>
                        </ul>
                    </div>



                </div>


                {/* end of video section */}


               
            <div className='w-full flex md:flex-row-reverse flex-col p-2 bg-white mb-6 '>


<div className='md:w-7/12 h-full relative '>

<YoutubeEmbedd id='Mh9S1Gha8rw' />

    </div>

    <div className='md:w-5/12 h-full flex flex-col items-center justify-center bg-primary text-white p-10 '>

        <h2 className='flex mb-3 uppercase items-center text-xl justify-center'>CLIENT: <span className='flex items-center pl-2'><Image src='/brands/brand2.png' width='50' height='25' objectFit='contain'  /></span></h2>
        <p className='font-semibold text-center text-tiny'>Campaign goal: Long term brand awareness, under $25CPM goal & drive sign-ups</p>

        <ul className='font-light text-xs mt-4 list-disc  pl-4 text-left w-full'>

            <li>Platforms: Youtube</li>
            <li>Ad style: up to 3 minute pre roll ad</li>
            <li>24 influencer activations</li>
            <li>CPM: $19 achieved </li>
            <li>Campaign results: <br /><br /> <div className=' text-right'><ul >
                
                 <li>Youtube Views: <span className='text-alt'>4,317,646</span></li>
                 <li>Likes: <span className='text-alt'>168K</span></li>
                 <li>Comments: <span className='text-alt'>10,212</span></li>
                 
                 </ul>
                 
                 </div></li>

                 

        </ul>
    </div>



</div>


{/* end of double video section  */}


<div className='w-full flex md:flex-row flex-col p-2 bg-alt mb-6 '>


<div className='md:w-7/12 h-full relative '>

<YoutubeEmbedd id='OI5Bve4EmHs' />

</div>

<div className='md:w-5/12 h-full flex flex-col items-center justify-center bg-primary text-white p-10 '>

<h2 className='flex mb-3 uppercase items-center text-xl justify-center'>CLIENT: <span className='flex items-center pl-2  mt-[-4px]'><Image src='/brands/brand19.png' width='90' height='20' objectFit='contain'  /></span></h2>
<p className='font-semibold text-center text-tiny'>Campaign goal: Showcase Liberty 3 Pro earbuds using ASMR micro-influencers</p>

<ul className='font-light text-xs mt-4 list-disc  pl-4 text-left w-full'>

<li>Platforms: Youtube</li>
<li>Ad style: up to 3 minute pre-roll ad</li>
<li>6 influencer activations</li>
<li>Campaign results: <br /><br /> <div className=' text-right'><ul >

 <li>Youtube Views: <span className='text-alt'>602,886</span></li>
 <li>Likes: <span className='text-alt'>17.4K</span></li>
 <li>Comments: <span className='text-alt'>1298</span></li>
 
 </ul>
 
 </div></li>
</ul>
</div>



</div>

{/* start of Video Section  */}

<div className='w-full flex p-2  md:flex-row-reverse flex-col bg-white mb-6 	'>


<div className='md:w-2/5 w-full h-[470px] sm:h-[660px] md:h-full relative  justify-center w-full items-center align-middle bg-primary  md:pt-0'>

{/* <div className='md:h-[400px] w-full md:flex flex bg-primary relative w-full justify-center'
   dangerouslySetInnerHTML={{
    }}
   /> */}
<InstagramEmbed />

    </div>

    <div className='md:w-3/5 h-full flex flex-col items-center justify-center text-white p-10  bg-primary overflow-hidden'>

        <h2 className='flex text-white mb-3 uppercase items-center text-xl justify-center'>CLIENT: <span className='flex items-center pl-2'><Image src='/brands/brand8.png' width='80' height='30' objectFit='contain' /></span></h2>
        <p className='font-semibold text-center text-sm'>Campaign goal: Targeting a 35+ audience using micro-beauty influencers. Promoting several premium laser products to increase brand awareness and drive social engagement.</p>

        <ul className='font-light text-xs mt-6 list-disc  pl-4 text-left w-full'>

            <li>Platforms: Instagram & Youtube</li>
            <li>Ad style: Instagram post & story. Youtube pre-roll up to 5 minutes.</li>
            <li>6 influencer activations</li>
            <li>CPM Goal: $40 - $26 achieved</li>
            <li>Campaign results: <br /><br /> <div className=' text-right'><ul >
                
                 <li>Youtube Views: <span className='text-alt'>139,500</span></li>
                 <li>Likes: <span className='text-alt'>5137</span></li>
                 <li>Comments: <span className='text-alt'>523</span></li>
                 <li>Instagram Reach: <span className='text-alt'>350K</span></li>
                 
                 </ul>
                 
                 </div></li>
        </ul>
    </div>



</div>


{/* end of video section */}



<div className='w-full flex md:flex-row flex-col p-2 bg-alt mb-6 '>


<div className='md:w-7/12 h-full relative '>

<YoutubeEmbedd id='ZGU8XByb-20' />

</div>

<div className='md:w-5/12 h-full flex flex-col items-center justify-center bg-primary text-white p-10 '>

<h2 className='flex mb-3 uppercase items-center text-xl justify-center'>CLIENT: <span className='flex items-center pl-2'><Image src='/brands/brand21.png' width='70' height='35' objectFit='contain'  /></span></h2>
<p className='font-semibold text-center text-tiny'>Campaign goal: Long term campaign building awareness and increase reach to drive downloads.</p>

<ul className='font-light text-xs mt-4 list-disc  pl-4 text-left w-full'>

<li>Platforms: Youtube</li>
<li>Ad style: Youtube pre-roll up to 3 minutes</li>
<li>17 influencer activations</li>
<li>CPM: Under $25 CPM goal - $13 achieved</li>
<li>Campaign results: <br /><br /> <div className=' text-right'><ul >

 <li>Youtube Views: <span className='text-alt'>5,071,936</span></li>
 <li>Likes: <span className='text-alt'>138K</span></li>
 <li>Comments: <span className='text-alt'>6971</span></li>
 
 </ul>
 
 </div></li>
</ul>
</div>



</div>


{/* end of double video section  */}

{/* start of Video Section  */}

<div className='w-full flex p-2  md:flex-row-reverse flex-col bg-white mb-6 '>


<div className='md:w-7/12 w-full h-full relative '>

    <YoutubeEmbedd id='bxDhwY1S0fc' />

    </div>

    <div className='md:w-5/12 h-full flex flex-col items-center justify-center text-white p-10  bg-primary '>

        <h2 className='flex text-white mb-3 uppercase items-center text-xl justify-center'>CLIENT: <span className='flex items-center pl-2'><Image src='/brands/brand17.png' width='90' height='30' objectFit='contain' /></span></h2>
        <p className='font-semibold text-center text-sm'>Campaign goal: Meet CPA & ROI goals.</p>

        <ul className='font-light text-xs mt-4 list-disc  pl-4 text-left w-full'>

            <li>Platforms: Youtube</li>
            <li>Ad style: up to 3 minute pre-roll ad</li>
            <li>10 influencer activations</li>
            <li>CPM: $12 achieved & ROI both exceeded expectations</li>
            <li>Campaign results: <br /><br /> <div className=' text-right'><ul >
                
                 <li>Youtube Views: <span className='text-alt'>1,187,364</span></li>
                 <li>Likes: <span className='text-alt'>35.5K</span></li>
                 <li>Comments: <span className='text-alt'>2219</span></li>
                 
                 </ul>
                 
                 </div></li>
        </ul>
    </div>



</div>


{/* end of video section */}





{/* end of double video section  */}




            </div>
</div>
</div>
    );
};

export default CaseStudies;