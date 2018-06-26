import React from 'react';
import VideoListItem from "./VideoListItem";


const VideoList = ({videoList, setSelectedVideo}) => {
    return (
        <div className="VideoList">
            {videoList.map((video, i) => {
                return (<VideoListItem
                    setSelectedVideo={setSelectedVideo}
                    video={video} key={i}/>)
            })}


        </div>
    );

}

export default VideoList;
