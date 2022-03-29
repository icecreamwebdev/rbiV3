import React from 'react';
import groq from 'groq';
import client from '../../utils/client';
import useSWR from 'swr';
import Link from 'next/link';

const BlofFooter = () => {


    const { data, error } = useSWR(groq`*[_type == "post"][0..2]`, query =>
    client.fetch(query)
  );

  if (!data) return <div>Loading blog.</div>;

    return (
        <>


        {data.map((post) => {

            return(
<div className='mb-2'>
<h2 className='hover:text-orange-300'>
    <Link href={`../blog/${post.slug.current}`}>
{post.title}
</Link>
</h2>


<span className='text-gray-400 '>- {new Date(post._createdAt).toDateString()}</span>
</div>
            )

        })}
       

        </>
    
    );
};

export default BlofFooter;