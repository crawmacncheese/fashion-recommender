import React from 'react';
import Video from '../media/vid/raf_riot_riot_riot.mp4';

const VideoBackground = () => {
  return (
    <div className="relative w-full h-full">
      <video
        autoPlay
        loop
        muted
        className="fixed w-full h-full object-cover -z-50"
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
