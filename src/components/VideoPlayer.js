import React, {Component} from 'react';


export class VideoPlayer extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        const title = this.props.video.snippet.title;
        const description = this.props.video.snippet.description;
        const src = "https://www.youtube.com/embed/" + this.props.video.id.videoId;

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
            ;
    }
}

export default VideoPlayer;
