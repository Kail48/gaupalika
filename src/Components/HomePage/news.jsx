import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
export default function News(props) {
  const news=props.newsData.news;
  let newsString=[];
  news.forEach(element => {
    newsString.push(element.name+element.description);
  });
  return (news.length<1)?(
      <div className='news-wrapper is-flex'>
        <div class="news-label has-background-link">
          <p className='has-text-white has-text-centered pt-3'>सूचना</p>
          </div>
          <marquee width="100%" direction="left" height="50px" scrollamount="50" className="news-panel has-text-white is-v-centered">
            <p className='has-text-white news-content has-text-centered pt-3'>No news to show!!!</p>
          </marquee>
          </div>
    
  ):
  <div className='news-wrapper is-flex'>
        <div class="news-label has-background-link">
          <p className='has-text-white  has-text-centered pt-3'>सूचना</p>
          </div>
      <marquee width="100%" direction="left" height="50px" scrollamount="4" className="news-panel has-text-white is-v-centered">
      <p className='has-text-white  has-text-centered pt-3'>{newsString.join("\t\t\t\t\t")}</p>
          </marquee>
          </div>
}
