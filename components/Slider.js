import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import ReactDOM from "react-dom";
import getWindowSize from "../utils/GetWindowSize";


export default class AutoPlay extends Component {
    
  render() {

    const width = this.props.width;
    
    const settings = {
      infinite: true,
      slidesToShow: width< 768 ? 2 : (width< 1100) ? 3 : 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500, 
      arrows:false,
      dots:false,
      autoplaySpeed: 500,
    };

    const imageWidth = width< 768 ? '85' : '110'
    


    


    return (
      <div className='overflow-hidden text-white bg-primary w-full pb-0 '>
        <Slider {...settings}>
          <div className='flex-col justify-center text-center h-100'>
              <span className='flex justify-center items-center h-20 '>
            <img src='/brands/brand1.png' width={imageWidth} height='40' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center h-20 '>
            <img src='/brands/brand2.png' width={imageWidth} height='40' objectFit='contain'/>
            </span>
          </div>
          <div className='flex-col justify-center text-center h-max'>
              <span className='flex justify-center items-center h-20 w-full '>
            <img src='/brands/brand3.png' width={imageWidth} height='50' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center  h-20 ' >
            <img src='/brands/brand4.png' width={imageWidth} height='40' objectFit='contain'/>
            </span>
          </div>

          <div className='flex-col justify-center text-center h-100'>
              <span className='flex justify-center items-center h-20 '>
            <img src='/brands/brand5.png' width={imageWidth} height='40' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center h-20 '>
            <img src='/brands/brand12.png' width={imageWidth} height='40' objectFit='contain'/>
            </span>
          </div>
          <div className='flex-col justify-center text-center h-max'>
              <span className='flex justify-center items-center h-20 w-full '>
            <img src='/brands/brand7.png' width={imageWidth} height='40' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center  h-20 ' >
            <img src='/brands/brand8.png' width={imageWidth} height='40' objectFit='contain'/>
            </span>
          </div>

          <div className='flex-col justify-center text-center h-100'>
              <span className='flex justify-center items-center h-20 '>
            <img src='/brands/brand9.png' width={imageWidth} height='40' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center h-20 '>
            <img src='/brands/brand10.png' width={imageWidth} height='40' objectFit='contain'/>
            </span>
          </div>
          <div className='flex-col justify-center text-center h-max'>
              <span className='flex justify-center items-center h-20 w-full '>
            <img src='/brands/brand11.png' width={imageWidth} height='40' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center  h-20 ' >
            <img src='/brands/brand14.png' width={imageWidth} height='40' objectFit='contain'/>
            </span>
          </div>

          <div className='flex-col justify-center text-center h-100'>
              <span className='flex justify-center items-center h-20 '>
            <img src='/brands/brand13.png' width={imageWidth} height='40' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center h-20 '>
            <img src='/brands/brand6.png' width={imageWidth} height='40' objectFit='contain'/>
            </span>
          </div>
          <div className='flex-col justify-center text-center h-max'>
              <span className='flex justify-center items-center h-20 w-full '>
            <img src='/brands/brand15.png' width={imageWidth} height='40' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center  h-20 ' >
            <img src='/brands/brand16.png' width={imageWidth} height='40' objectFit='contain'/>
            </span>
          </div>

          <div className='flex-col justify-center text-center h-100'>
              <span className='flex justify-center items-center h-20 '>
            <img src='/brands/brand17.png' width={imageWidth} height='50' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center h-20 '>
            <img src='/brands/brand18.png' width={imageWidth} height='50' objectFit='contain'/>
            </span>
          </div>
          <div className='flex-col justify-center text-center h-max'>
              <span className='flex justify-center items-center h-20 w-full '>
            <img src='/brands/brand19.png' width={imageWidth} height='50' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center  h-20 ' >
            <img src='/brands/brand20.png' width={imageWidth} height='50' objectFit='contain'/>
            </span>
          </div>
          <div className='flex-col justify-center text-center h-max'>
              <span className='flex justify-center items-center h-20 w-full '>
            <img src='/brands/brand33.png' width={imageWidth} height='50' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center  h-20 ' >
            <img src='/brands/brand34.png' width={imageWidth} height='50' objectFit='contain'/>
            </span>
          </div>
          <div className='flex-col justify-center text-center h-max'>
              <span className='flex justify-center items-center h-20 w-full '>
            <img src='/brands/brand21.png' width={imageWidth} height='50' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center  h-20 ' >
            <img src='/brands/brand22.png' width={imageWidth} height='50' objectFit='contain'/>
            </span>
          </div>
          <div className='flex-col justify-center text-center h-max'>
              <span className='flex justify-center items-center h-20 w-full '>
            <img src='/brands/brand23.png' width={imageWidth} height='50' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center  h-20 ' >
            <img src='/brands/brand24.png' width={imageWidth} height='50' objectFit='contain'/>
            </span>
          </div>
          <div className='flex-col justify-center text-center h-max'>
              <span className='flex justify-center items-center h-20 w-full '>
            <img src='/brands/brand25.png' width={imageWidth} height='50' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center  h-20 ' >
            <img src='/brands/brand26.png' width={imageWidth} height='50' objectFit='contain'/>
            </span>
          </div>
          <div className='flex-col justify-center text-center h-max'>
              <span className='flex justify-center items-center h-20 w-full '>
            <img src='/brands/brand27.png' width={imageWidth} height='50' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center  h-20 ' >
            <img src='/brands/brand28.png' width={imageWidth} height='50' objectFit='contain'/>
            </span>
          </div>
          <div className='flex-col justify-center text-center h-max'>
              <span className='flex justify-center items-center h-20 w-full '>
            <img src='/brands/brand35.png' width='90' height='30' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center  h-20 ' >
            <img src='/brands/brand30.png' width={imageWidth} height='50' objectFit='contain'/>
            </span>
          </div>
          <div className='flex-col justify-center text-center h-max'>
              <span className='flex justify-center items-center h-20 w-full '>
            <img src='/brands/brand31.png' width={imageWidth} height='50' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center  h-20 ' >
            <img src='/brands/brand32.png' width={imageWidth} height='50' objectFit='contain'/>
            </span>
          </div>

          















          {/* <div className='flex-col justify-center text-center '>
              <span className='flex justify-center items-center h-20' >
            <img src='/brands/brand4.png' width='150' height='50' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center pt-6 h-20'>
            <img src='/brands/brand5.png' width='150' height='50' objectFit='contain'/>
            </span>
          </div>
          <div className='flex-col justify-center text-center '>
              <span className='flex justify-center items-center h-20'>
            <img src='/brands/brand6.png' width='150' height='50' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center pt-6 h-20'>
            <img src='/brands/brand7.png' width='150' height='50' objectFit='contain'/>
            </span>
          </div>
          <div className='flex-col justify-center text-center '>
              <span className='flex justify-center items-center h-20'>
            <Image src='/brands/brand8.png' width='150' height='50' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center pt-6 h-20' >
            <Image src='/brands/brand9.png' width='100' height='50' objectFit='contain'/>
            </span>
          </div>

          <div className='flex-col justify-center text-center '>
              <span className='flex justify-center items-center h-20'>
            <Image src='/brands/brand11.png' width='150' height='50' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center pt-6 h-20'>
            <Image src='/brands/brand12.png' width='150' height='50' objectFit='contain'/>
            </span>
          </div>
          <div className='flex-col justify-center text-center '>
              <span className='flex justify-center items-center h-20'>
            <Image src='/brands/brand13.png' width='150' height='50' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center pt-6'>
            <Image src='/brands/brand14.png' width='150' height='50' objectFit='contain'/>
            </span>
          </div>
          <div className='flex-col justify-center text-center '>
              <span className='flex justify-center items-center'>
            <Image src='/brands/brand15.png' width='150' height='50' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center pt-6'>
            <Image src='/brands/brand16.png' width='150' height='50' objectFit='contain'/>
            </span>
          </div>
          <div className='flex-col justify-center text-center '>
              <span className='flex justify-center items-center'>
            <Image src='/brands/brand17.png' width='150' height='50' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center pt-6'>
            <Image src='/brands/brand18.png' width='150' height='50' objectFit='contain'/>
            </span>
          </div>
          <div className='flex-col justify-center text-center '>
              <span className='flex justify-center items-center'>
            <Image src='/brands/brand19.png' width='150' height='50' objectFit='contain'/>
            </span>
            <span className='flex justify-center items-center pt-6'>
            <Image src='/brands/brand20.png' width='100' height='50' objectFit='contain'/>
            </span>
          </div> */}


        </Slider>
      </div>
    );
  }
}