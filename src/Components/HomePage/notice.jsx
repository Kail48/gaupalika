import React from 'react'
import { useState,useEffect} from 'react';
import axios from 'axios';

import { Loader } from '@mantine/core';
import NoticeShowCase from './noticeShowCase';
import { Pagination } from '@mantine/core';
export default function Notice(props) {
  const notices=props.noticeData.notices;
  //console.log(notices);
  
  return notices.length<1?(
    <div class="tile is-child box notice-container p-0 pl-3 pr-3">
     <div  className='notice-case-container'>
        <div className='notice-content'>
          <div className='notice-page notice-palceholder-wrapper'>
            <div class="ui placeholder">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>
         </div>
      
    </div>
      </div>
  ):
  (
    <div class="tile is-child box notice-container p-0 pl-3 pr-3">
     <p class="title is-size-4 has-text-centered mt-2">Notice</p>
      <div   
      className='notice-case-container'>
         {/* <marquee width="100%" direction="up" height="100%" scrollamount="2" className="notice-panel">
         {noticeData.map(listitem => (
            <NoticeShowCase data={listitem}/>
          ))}
        </marquee> */}
        <div className='marquee' >
         {notices.map(listitem => (
            <NoticeShowCase data={listitem}/>
          ))}
        </div>
    
          
      </div>
    </div>
  );
};
