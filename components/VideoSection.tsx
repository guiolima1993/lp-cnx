import React from 'react';
import './VideoSection.scss';

const VideoSection: React.FC = () => {
  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/7r0-Vjdeo3Q?si=gE9cvbd4EvKuPdCe&autoplay=1&controls=0&showinfo=0&modestbranding=1&rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
};

export default VideoSection;
