import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { useState} from 'react';
import '../../Css/HomePage/homepage.css';
import YtPlayer from './ytplayer';
export default function VideoPlayer(props) {
  let videos=props.videoData.videos;
  let images=props.imageData.images;
  if(images[images.length-1]!=""){
  images.push("");
  console.log("images ",images)
}
  const [videoId, setVideoId] = useState(0);
  const [contentIsVideo, setContentIsVideo] = useState(false);


  let videoData=[];
  videos.forEach(element => {
    let originalLink=element.link;
    let videoLink="";
    
    for(let i=originalLink.length-1;i>0;i--){
      if(originalLink[i]==='/') break;
      videoLink=originalLink[i]+videoLink;
     
    }
    
    //let embedLink="https://www.youtube.com/embed/"+videoLink+"?autoplay=1&mute=1";

    videoData.push(videoLink.slice(8))});
    console.log(videoData);

const changeVideo=()=>{
if(videoId+1===videoData.length){
  console.log(videoId,"at if")
  console.log("is at video changer")
  setContentIsVideo(false);
  setVideoId(0);
  
  
}
else{
  console.log("current video id",videoId)
  setVideoId(videoId+1);
  
}
};


  
  return contentIsVideo?(<div className='tile is-child box box-width'>
      <YtPlayer src={videoData[videoId]} changeVideo={changeVideo}/>
    
    </div>
  ):
    (
    <div class="tile is-child box box-width">
      <div className='top-carousel-wrapper'>
      <Carousel autoPlay={true}
              infiniteLoop={true} 
        showIndicator={true}   
        showStatus={false}
        showArrows={false} 
        showThumbs={false} 
        stopOnHover={false} 
        emulateTouch={true}
        swipeable={true}
        interval={5000}
        onChange={async (index)=>{
          console.log(index,"is index out of ",images.length);
          if(index===images.length-1){
            
            setContentIsVideo(true);
          
          }
        }}
        >

      {images.map(listitem => (
            <img src={listitem.image} class='top-carousel-img'></img>
            
          ))}
          
      </Carousel>
    </div>
    </div>
  )
};
