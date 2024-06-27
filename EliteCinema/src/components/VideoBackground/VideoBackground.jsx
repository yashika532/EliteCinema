import React from 'react';

const VideoBackground = () => {
  return (
    <div>
      <iframe
        className='w-screen aspect-video'
        src="https://www.youtube.com/embed/gqs0oo3FntE?autoplay=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
