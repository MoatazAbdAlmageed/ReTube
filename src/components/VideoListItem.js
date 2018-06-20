import React, {Component} from 'react';


export class VideoListItem extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.video);
        /*this.src = "https://www.youtube.com/embed/"+this.props.video.id.videoId;
        console.log(this.src);*/
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
