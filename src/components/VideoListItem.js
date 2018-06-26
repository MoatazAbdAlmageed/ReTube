import React from 'react';


function VideoListItem(props) {
    const url = props.video.snippet.thumbnails.medium.url;
    const title = props.video.snippet.title;
    const videoId = props.video.id.videoId;
    let styles = {}

    /*if it is single video not playlist change style */
    if (videoId) {
        styles = {
            "cursor": "pointer",
        }
    }
    return (

        <div className="VideoListItem" style={styles}>
            <img

                onClick={props.setSelectedVide}
                src={url}
                alt={title}/>
            <p>{title}</p>
            <hr/>
        </div>
    );
}

export default VideoListItem;
