import 'bulma/css/bulma.min.css';
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Header from '../Components/header';
import VideoPlayer from '../Components/HomePage/videoPlayer';
import ImageCarousel from '../Components/HomePage/imageCarousel';
import Notice from '../Components/HomePage/notice';
import News from '../Components/HomePage/news';

import '../Css/HomePage/homepage.css';
import axios from 'axios';

export default function HomePage() {
  const navigate = useNavigate();
  const {state}=useLocation();
  console.log(state);
  
  
  const headerTitleData={
    main_office_name:state[0].main_office_name,
    address:state[0].address,
    phone_number:state[0].phone_number
  }
  const imageData={
    images:state[0].image
  }
  const videoData={
    videos:state[0].video
  }
  const noticeData={
    notices:state[0].notice
  }
  const staffData={
    staffData:state[0].staff
  }
  const news={
    news:state[0].news
  }
    return (
      <div className='main-div'>
        
      <Header titleData={headerTitleData}/>
      <div class="column is-full p-0 main-content">
        
        <div class="tile is-ancestor">
          <div class="tile is-5 is-vertical is-parent left-container">
            <VideoPlayer imageData={imageData} videoData={videoData}/>
            <ImageCarousel staffData={staffData}/>
          </div>
          <div class="tile is-parent right-container p-0">
          <Notice noticeData={noticeData}/>
          </div>
        </div>
        <div className='sticky-news has-background-black'>
        <News newsData={news}/>
        </div>
       
      </div>

      </div>
    );
  }
  