import React from 'react';

const YoutubeEmbedd = ({id}) => {
    return (
        <iframe
        className='w-full md:h-full h-[300px]'
src={`https://www.youtube.com/embed/${id}`}
frameBorder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
title="Embedded youtube"
/>
    );
};

export default YoutubeEmbedd;