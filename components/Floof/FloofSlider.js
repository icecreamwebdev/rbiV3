import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import ReactDOM from "react-dom";


export default class FloofSlider extends Component {
    
  render() {


    const width = this.props.width;

    const slidesPer = width < 1024 ? (width< 658 ? (width< 458 ? 2 : 3) : 4) : 6

    console.log(width)
    
    const settings = {
      dots:true,
      infinite: true,
      slidesToShow: slidesPer,
      slidesToScroll: slidesPer,
      arrows: false,
      autoplay: false,
      speed: 800,
    };

    const imageWidth = width< 558 ? '90' : '140'
    


    


    return (
      <div className='overflow-hidden mt-10 w-full text-white bg-primary w-full pb-10 '>
        <Slider {...settings}>
          <div className='flex-col justify-center text-center h-100'>
              <Image src='/founder1.png' width={imageWidth} height={imageWidth} objectFit='cover'/>
          </div>
          <div className='flex-col justify-center text-center h-100'>
              <Image src='/founder1.png' width={imageWidth} height={imageWidth} objectFit='cover'/>
          </div>
          <div className='flex-col justify-center text-center h-100'>
              <Image src='/founder1.png' width={imageWidth} height={imageWidth} objectFit='cover'/>
          </div>
          <div className='flex-col justify-center text-center h-100'>
              <Image src='/founder1.png' width={imageWidth} height={imageWidth} objectFit='cover'/>
          </div>
          <div className='flex-col justify-center text-center h-100'>
              <Image src='/founder1.png' width={imageWidth} height={imageWidth} objectFit='cover'/>
          </div>
          <div className='flex-col justify-center text-center h-100'>
              <Image src='/founder1.png' width={imageWidth} height={imageWidth} objectFit='cover'/>
          </div>
          <div className='flex-col justify-center text-center h-100'>
              <Image src='/founder1.png' width={imageWidth} height={imageWidth} objectFit='cover'/>
          </div>
          <div className='flex-col justify-center text-center h-100'>
              <Image src='/founder1.png' width={imageWidth} height={imageWidth} objectFit='cover'/>
          </div>
          <div className='flex-col justify-center text-center h-100'>
              <Image src='/founder1.png' width={imageWidth} height={imageWidth} objectFit='cover'/>
          </div>
          
        </Slider>
      </div>
    );
  }
}