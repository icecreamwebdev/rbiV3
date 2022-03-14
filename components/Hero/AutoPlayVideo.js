import React, {useRef, useEffect} from "react"

export default function AutoPlaySilentVideo(prps) {
    const videoRef = useRef(undefined);
    useEffect(() => {
        videoRef.current.defaultMuted = true;
    })
    return (
        <video
            className='w-screen h-2/3 md:h-[500px] brightness-[.9] z-15 max-w-4xl scale-100 relative m-auto object-cover overflow-hidden'
            ref={videoRef}
            loop
            autoPlay
            muted
            playsInline>
            <source src='homeBackground.mp4' type="video/mp4"/>
        </video>
    );
}