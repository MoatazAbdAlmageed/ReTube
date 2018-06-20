import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

export class Youtube extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term:'nasa',
            videoList: [],
            selectedVideo:{},
        };


    }
    componentWillMount() {

        /*TODO: move to hangle change function*/
        const api = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+this.state.term+'&type=video&videoDefinition=high&key=AIzaSyAzhkrAEax-6glljYL4U1GaEOwjSyydEpk';


        fetch(api).then(
            function (response) {
                return response.json();
            }
        ).then( (jsonData) =>{
            if (jsonData.items && jsonData.items.length){
                this.setState(
                    {
                    videoList: jsonData.items,
                    selectedVideo: jsonData.items[0]
                }
            );
            }
        });

    }

    handleChange(e) {
        /*let term = e.target.value;
        this.props.changeTitle(term);
        this.video = term;
        debugger
        var element = document.getElementById('player');
        this.loadClientWhenGapiReady(null, term);
        if (element) {

            element.src = 'https://www.youtube.com/embed/' + this.video + '?enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=1';

        }*/


    }

    render() {
        if (!this.state.videoList.length) {
            return (
                <p>Loading</p>
            );
        }
        return (
            <div className="Youtube">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SearchBar term={this.state.term}/>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-md-9">
                            <VideoPlayer video={this.state.selectedVideo}/>

                        </div>
                        <div className="col-md-3">
                            <VideoList videoList={this.state.videoList}/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default Youtube;
