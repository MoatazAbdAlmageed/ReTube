import React, {Component} from 'react';


export class VideoListItem extends Component {


    setSelectedVideo() {
        this.props.setSelectedVideo(this.video)
    }


    componentDidMount() {
        this.setSelectedVideo = this.setSelectedVideo.bind(this)

    }


    componentWillReceiveProps() {

    }

    render() {

        this.src = this.props.video.snippet.thumbnails.medium.url;
        this.title = this.props.video.snippet.title;
        this.id = this.props.video.id.videoId;
        this.video = this.props.video;
        return (

            <div className="VideoListItem">
                <img
                    onClick={this.setSelectedVideo}
                    src={this.src} alt={this.title}/>
                <p>{this.title}</p>
                <hr/>
            </div>
        );
    }
}

export default VideoListItem;
