import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshakeAngle, faMagnifyingGlassLocation, faListCheck, faChartLine } from '@fortawesome/free-solid-svg-icons';


const icon1 =  <FontAwesomeIcon icon={faHandshakeAngle}  />
const icon2 =  <FontAwesomeIcon icon={faMagnifyingGlassLocation}  />
const icon3 =  <FontAwesomeIcon icon={faListCheck}  />
const icon4 =  <FontAwesomeIcon icon={faChartLine}  />


const ServicesIconSec = () => {
    return (
        <div className='flex mt-10 justify-center flex-wrap'>
            <div className='flex-col basis-1/2 md:basis-1/4 shrink-0 group justify-center text-center pt-5 px-3'><div className='m-auto px-6 rounded-[40px] text-2xl w-min bg-gray-100 group-hover:bg-alt py-10 text-gray-900 hover:text-gray-900'>{icon1}</div><h2  className='pt-6 pb-3 text-tiny md:text-base group-hover:text-alt'>Creative Assistance</h2><p className='text-tiny font-light text-primary opacity-100 text-xs'>Our creative team will design the initial concept of the campaign.</p></div>
            <div className='flex-col basis-1/2 md:basis-1/4 shrink-0 group justify-center text-center pt-5 px-3'><div className='m-auto px-6 rounded-[40px] text-2xl w-min bg-gray-100 group-hover:bg-alt py-10 text-gray-900 hover:text-gray-900' >{icon2}</div><h2  className='pt-6 pb-3 text-tiny md:text-base group-hover:text-alt'>Influencer Sourcing</h2><p className='text-tiny font-light text-primary opacity-100 text-xs'>From our in-house roster to our extensive outsourced talent, we'll find the right creators for you.</p></div>
            <div className='flex-col basis-1/2 md:basis-1/4 shrink-0  group justify-center text-center pt-5 px-3'><div className='m-auto px-6 rounded-[40px] text-2xl w-min bg-gray-100 group-hover:bg-alt py-10 text-gray-900 hover:text-gray-900'>{icon3}</div><h2  className='pt-6 pb-3 text-tiny md:text-base group-hover:text-alt'>Campaign Management</h2><p className='text-tiny font-light text-primary opacity-100 text-xs'> All campaign briefs, contracts and payments are handled in-house.</p></div>
            <div className='flex-col basis-1/2 md:basis-1/4 shrink-0  group justify-center text-center pt-5 px-3'><div className='m-auto px-6 rounded-[40px] text-2xl w-min bg-gray-100 group-hover:bg-alt py-10 text-gray-900 hover:text-gray-900'>{icon4}</div><h2  className='pt-6 pb-3 text-tiny md:text-base group-hover:text-alt'>Campaign Analysis</h2><p className='text-tiny font-light text-primary opacity-100 text-xs'>Using data analytics we gain insights into your current campaign and guide you through the next.</p></div>
        </div>
    );
};

export default ServicesIconSec;