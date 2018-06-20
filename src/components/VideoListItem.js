import React, {Component} from 'react';


export class VideoListItem extends Component {

    render() {
        return (

            <div className="VideoListItem">
                <div className="card">
                    <iframe width="100%" src="https://www.youtube.com/embed/sITyhwEX6Ag"
                            frameBorder="0"
                            showinfo="0" controls="0"
                    ></iframe>

                </div>
            </div>
        );
    }
}

export default VideoListItem;
