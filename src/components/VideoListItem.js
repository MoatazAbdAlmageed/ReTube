import React, {Component} from 'react';


export class VideoListItem extends Component {
    constructor(props) {
        super(props);
        this.src = this.props.video.snippet.thumbnails.medium.url;
        this.title = this.props.video.snippet.title;
    }

    render() {
        return (

            <div className="VideoListItem">
                    <a href="#"><img src={this.src} alt={this.title}/>
                    </a>
            </div>
        );
    }
}

export default VideoListItem;
