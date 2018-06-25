import React, {Component} from 'react';


export class VideoListItem extends Component {
    constructor(props) {
        super(props)
    }

    setSelectedVideo = () => {
        if (this.props.video && this.props.video.id.videoId) {
            this.props.setSelectedVideo(this.props.video)
        }
    }

    render() {
        const url = this.props.video.snippet.thumbnails.medium.url;
        const title = this.props.video.snippet.title;
        const id = this.props.video.id.videoId;
        let styles = {}

        /*if it is single video not playlist change style */
        if (id) {
            styles = {
                "cursor": "pointer",
            }
        }
        return (

            <div className="VideoListItem" style={styles}>
                <img

                    onClick={this.setSelectedVideo}
                    src={url}
                    alt={title}/>
                <p>{title}</p>
                <hr/>
            </div>
        );
    }
}

export default VideoListItem;
