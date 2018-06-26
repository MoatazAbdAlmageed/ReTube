import React from 'react';


function VideoPlayer(props) {

    const title = props.video.snippet.title;
    const description = props.video.snippet.description;
    const src = "https://www.youtube.com/embed/" + props.video.id.videoId;


    return (

        <div className="VideoPlayer">

            <div className="card">
                <iframe height="315" width="100%" src={src}
                        frameBorder="0"
                        title={title}
                        allow="autoplay; encrypted-media" allowFullScreen></iframe>

                <div className="card-body">
                    <h2 className="card-term">{title}</h2>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer;
