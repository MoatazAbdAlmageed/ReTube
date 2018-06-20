import React, {Component} from 'react';


export class VideoPlayer extends Component {

    render() {
        return (

            <div className="VideoPlayer">

                <div className="card">


                    <iframe height="315" width="100%" src="https://www.youtube.com/embed/sITyhwEX6Ag"
                            frameBorder="0"
                            allow="autoplay; encrypted-media" allowFullScreen></iframe>


                    <div className="card-body">
                        <h5 className="card-term">{this.props.term}</h5>
                        <p className="card-text">Some quick example text to build on the card term and
                            make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoPlayer;
