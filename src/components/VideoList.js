import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ videos, onVideoSelect}) => { // con esta notacion evito llamar siempre a props.videos
    
    const renderedList = videos.map((video) => {
        return (
        <VideoCard 
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}    
        />)
   });

   return <div className="ui relaxed divided list">{renderedList}</div>;

}

export default VideoList;