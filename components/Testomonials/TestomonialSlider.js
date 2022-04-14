import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import ReactDOM from "react-dom";
import TestoItem from "./TestoItem";


export default class TestPlay extends Component {
    
  render() {

    const width = this.props.width;
    
    const settings = {
      dots:true,
      infinite: true,
      slidesToShow: width< 768 ?  1 : width< 1024 ? 2 : 3,
      slidesToScroll: width < 768 ? 1 : width< 1024 ? 2 : 3,
      arrows: false,
      autoplay: false,
      speed: 800,
    };

    const imageWidth = width< 768 ? '100' : '140'
    


    


    return (
      <div className='overflow-hidden w-full text-white bg-primary w-full pb-10 '>
        <Slider {...settings}>
          <div className='flex-col justify-center text-center h-100'>
              <TestoItem brand='Human Media Group' author='Ben' mainText="“The RBI team is fantastic to work with - they&#39;re friendly. responsive and always deliver at
each stage of the campaign. I highly recommend working with RBI for all of your influencer
marketing needs.”"  imgSrc='' />
          </div>
          <div className='flex-col justify-center text-center h-100'>
          <TestoItem brand='Method Growth' author='Matt' mainText="“We&#39;ve been working with the RBI team for numerous integrations. RBI is always a pleasure
to work with, professional, and able to get the job done. RBI&#39;s talent has proven effective so
we keep coming back for more integrations across our client portfolio!”"  imgSrc='' />
          </div>
          <div className='flex-col justify-center text-center h-100'>
          <TestoItem brand='Manta Sleep' author='Lia' mainText="The RBI team is fantastic to work with - theyre friendly. responsive and always deliver at
each stage of the campaign. I highly recommend working with RBI for all of your influencer
marketing needs."  imgSrc='' />
          </div>
          <div className='flex-col justify-center text-center h-100'>
          <TestoItem brand='Algebra Media' author='-' mainText="“&quot;RunByInfluencers are wonderful to work with. They keep the space exciting with their wide
array of creators, friendly demeanor, and timely communication. Partnering with RBI is a
stellar experience every step of the way.&quot;"  imgSrc='' />
          </div>
         
          
        </Slider>
      </div>
    );
  }
}