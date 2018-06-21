import React, {Component} from 'react';
import VideoListItem from "./VideoListItem";


export class VideoList extends Component {

    render() {
        return (
            <div className="VideoList">

                {this.props.videoList.map((video, i) => {
                    return (<VideoListItem video={video} key={i}/>)
                })}


            </div>
        );
    }
}

export default VideoList;
