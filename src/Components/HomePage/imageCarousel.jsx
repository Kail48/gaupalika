import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../Css/HomePage/homepage.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import StaffCard from './staffCard';
import { Loader } from '@mantine/core';

export default function ImageCarousel(props) {
  const staffs=props.staffData.staffData;
  //console.log("staff",staffs);
  return props.staffData.length<0?(
      <div className='carousel-container width'>
    <div class="ui placeholder">
    <div class="image"></div>
  </div>
  </div>
  ):(
    <div className='carousel-container width'>
      <div className='border'>
      <Carousel autoPlay={true}
      showStatus={false}
      emulateTouch={true}
        showIndicator={false} 
        infiniteLoop={true} 
        showArrows={false} 
        showThumbs={false} 
        stopOnHover={false} 
        swipeable={true}
        interval={5000}>
      {staffs.map(listitem => (
            <StaffCard data={listitem}/>
          ))}
          
      </Carousel>
      </div>
  </div>);
}
