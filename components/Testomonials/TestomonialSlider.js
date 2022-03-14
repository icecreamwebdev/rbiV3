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
      slidesToShow: width< 768 ?  1 : 3,
      slidesToScroll: width < 768 ? 1 : 3,
      arrows: false,
      autoplay: false,
      speed: 800,
    };

    const imageWidth = width< 768 ? '100' : '140'
    


    


    return (
      <div className='overflow-hidden w-full text-white bg-primary w-full pb-10 '>
        <Slider {...settings}>
          <div className='flex-col justify-center text-center h-100'>
              <TestoItem />
          </div>
          <div className='flex-col justify-center text-center h-100'>
              <TestoItem />
          </div>
          <div className='flex-col justify-center text-center h-100'>
              <TestoItem />
          </div>
          <div className='flex-col justify-center text-center h-100'>
              <TestoItem />
          </div>
          <div className='flex-col justify-center text-center h-100'>
              <TestoItem />
          </div>
          <div className='flex-col justify-center text-center h-100'>
              <TestoItem />
          </div>
          <div className='flex-col justify-center text-center h-100'>
              <TestoItem />
          </div>
          <div className='flex-col justify-center text-center h-100'>
              <TestoItem />
          </div>
          <div className='flex-col justify-center text-center h-100'>
              <TestoItem />
          </div>
          
        </Slider>
      </div>
    );
  }
}