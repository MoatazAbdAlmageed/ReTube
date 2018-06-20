import React, {Component} from 'react';
import VideoListItem from "./VideoListItem";


export class VideoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="VideoList">


                {this.props.videList.map((video, i) => {
                    return (<VideoListItem video={video} key={i}/> )
                })}


            </div>
        );
    }
}

export default VideoList;
