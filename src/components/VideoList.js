import React, {Component} from 'react';
import VideoListItem from "./VideoListItem";


export class VideoList extends Component {

    constructor(props) {
        super(props)
        this.setSelectedVideo = this.setSelectedVideo.bind(this)


    }

    setSelectedVideo(selectedVideo) {

        this.props.setSelectedVideo(selectedVideo)
    }

    render() {
        return (
            <div className="VideoList">

                {this.props.videoList.map((video, i) => {
                    return (<VideoListItem
                        setSelectedVideo={this.setSelectedVideo}
                        video={video} key={i}/>)
                })}


            </div>
        );
    }
}

export default VideoList;
