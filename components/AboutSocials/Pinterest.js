import React from 'react';
import { useEffect } from 'react';

const Pinterest = () => {

    const url = 'https://www.pinterest.com/pinterest/'

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
            <a 
  href="https://www.pinterest.com/anapinskywalker/"
  data-pin-do="embedUser"
  data-pin-scale-height="420"
  data-pin-scale-width="60"
  data-pin-build="doBuild"
>
</a>
   
    );
};

export default Pinterest;