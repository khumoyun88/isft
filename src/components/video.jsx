// VideoComponent.jsx
import React from 'react';
import ReactPlayer from 'react-player';

const VideoComponent = () => {
  return (
    <div className="flex justify-center items-top pt-5 " >
      <ReactPlayer
        url='https://youtu.be/Y_EHr5dmAYo'
        playing={false}
        controls={true}
        width='95%'
        height='400px'
      />
    </div>
  );
};

export default VideoComponent;
