import React from 'react';
import VideoListItem from "./VideoListItem";

function VideoList(props) {
    return (
        <div className="VideoList">
            {props.videoList.map((video, i) => {
                return (<VideoListItem
                    setSelectedVideo={props.setSelectedVideo}
                    video={video} key={i}/>)
            })}


        </div>
    );

}

export default VideoList;
