import React from 'react';
import { useEffect } from 'react';


const InstagramEmbed = () => {

    useEffect(()=>{

        //     const script = document.createElement('script')
    
        // script.async = true
        // script.type = 'text/javascript'
        // script['data-pin-build'] = 'doBuild'
        // script.src = '//assets.pinterest.com/js/pinit.js'
        // document.body.appendChild(script)
    
        const script = document.createElement('script')
        script.async = true
        script.type = 'text/javascript'
        script.dataset.pinBuild = 'doBuild'
        script.src = '//assets.pinterest.com/js/pinit.js'
        document.body.appendChild(script)
        if (window.doBuild) window.doBuild()
    
        })
    return (
        <iframe
        className='md:w-full h-[640px] w-full md:h-full h-full p-2 flex justify-center'
src={`https://www.instagram.com/reel/CIq4I4RDiBM/embed/?cr=1&v=14&rd=http%3A%2F%2Flocalhost%3A3000&rp=%2Fcase-studies#%7B%22ci%22%3A0%2C%22os%22%3A414.19999998807907%2C%22ls%22%3A407.30000001192093%2C%22le%22%3A409%7D`}
frameBorder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
title="Embedded youtube"
/>
    );
};


export default InstagramEmbed;