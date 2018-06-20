import React, {Component} from 'react';


export class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.title = this.props.video.snippet.title;
        this.description = this.props.video.snippet.description;
        this.src = "https://www.youtube.com/embed/"+this.props.video.id.videoId;
debugger
    }
    render() {
        return (

            <div className="VideoPlayer">

                <div className="card">


                    <iframe height="315" width="100%" src={this.src}
                            frameBorder="0"
                            allow="autoplay; encrypted-media" allowFullScreen></iframe>


                    <div className="card-body">
                        <h5 className="card-term">{this.title}</h5>
                        <p className="card-text">{this.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoPlayer;
