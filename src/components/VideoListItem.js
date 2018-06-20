import React, {Component} from 'react';


export class VideoListItem extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.video);
        this.src = "https://www.youtube.com/embed/"+this.props.video.id.videoId;
        console.log(this.src);
    }

    render() {
        return (

            <div className="VideoListItem">
                <div className="card">
                    <iframe width="100%" src={this.src}
                            frameBorder="0"
                            showinfo="0" controls="0"
                    ></iframe>

                </div>
            </div>
        );
    }
}

export default VideoListItem;
