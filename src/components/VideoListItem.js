import React from 'react';


const VideoListItem = ({video, setSelectedVideo}) => {
    const url = video.snippet.thumbnails.medium.url;
    const title = video.snippet.title;
    return (

        <div className="VideoListItem">
            <img
                onClick={() => setSelectedVideo(video)}
                src={url}
                alt={title}/>
            <p>{title}</p>
            <hr/>
        </div>
    );
}

export default VideoListItem;
