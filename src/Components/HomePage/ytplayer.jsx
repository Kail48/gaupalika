import React from 'react';
import YouTube from 'react-youtube';
import {isMobile} from 'react-device-detect';
class YtPlayer extends React.Component {
  render() {
    const opts = {
      height: '250px',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        
      },
    };
    const mobileOpts = {
      height: '300px',
      width: '375px',
      playerVars: {
        modestbranding:1,
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        
      },
    };
   
    return (
    <YouTube videoId={this.props.src} opts={isMobile?mobileOpts:opts} onEnd={(e)=>
        { 
          console.log(this.props.src," ENDED Requesting CHANGE")
          this.props.changeVideo();
        }} />
    );
}

  _onReady(event) {
  

  }
};
export default YtPlayer;

