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
  const [mediaId, setMediaId] = useState(0);
  const [contentIsVideo, setContentIsVideo] = useState(false);
  const [videoIsYt, setVideoIsYt] = useState(true);

  let mediaData=[]
  let videoData=[];
  videos.forEach(element => {
   
    let videoLink="";
    if(element.link===null){
      mediaData.push(element.media);
    }
    else{
      let originalLink=element.link;
    
    for(let i=originalLink.length-1;i>0;i--){
      if(originalLink[i]==='/') break;
      videoLink=originalLink[i]+videoLink;
     
    }
    videoData.push(videoLink.slice(8))
  }
    

    });
    console.log(videoData,'Yt video');
    console.log(mediaData,'video');
const changeMedia=()=>{
  console.log('changed');
  if(mediaId+1===mediaData.length){
    console.log(mediaId,"at if")
    console.log("is at video changer")
    setContentIsVideo(false);
    setVideoIsYt(true);
    setMediaId(0);
    
    
  }
  else{
    console.log("current video id",mediaId)
    setVideoId(mediaId+1);
    
  }
}
const changeVideo=()=>{
if(videoId+1===videoData.length){
  console.log(videoId,"at if")
  console.log("is at video changer")
  setVideoIsYt(false);
  setVideoId(0);
  
  
}
else{
  console.log("current video id",videoId)
  setVideoId(videoId+1);
  
}
};


  
  return contentIsVideo?(videoIsYt?
  (<div className='tile is-child box box-width'>
      <YtPlayer src={videoData[videoId]} changeVideo={changeVideo}/>
    
    </div>):(
      <div>
        <video width="100%" height="100%" controls autoPlay={true} onEnded={changeMedia}>
          <source src={mediaData[mediaId]} type="video/mp4" />
        </video>
      </div>
    )

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
