import React, {Component} from 'react';
import VideoListItem from "./VideoListItem";


export class VideoList extends Component {

    render() {
        return (

            <div className="VideoList">
                <VideoListItem/>
                <VideoListItem/>
                <VideoListItem/>
            </div>
        );
    }
}

export default VideoList;
