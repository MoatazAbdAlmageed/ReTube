import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

export class Youtube extends Component {

    constructor(props) {

        super(props);

        this.state = {
            term: 'ReactJs',
            type: 'video', // || playlis
            videoList: [],
            selectedVideo: {},
        };


    }


    fetchYoutubeVids(term = this.state.term, type = this.state.type) {

        const API_KEY = 'AIzaSyAzhkrAEax-6glljYL4U1GaEOwjSyydEpk'

        const api = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${term}&type=${type}&key=${API_KEY}`;


        fetch(api).then(response => response.json())
            .then((jsonData) => {
                    if (jsonData.items && jsonData.items.length) {
                        var items = jsonData.items;
                        if (this.state.type == 'video') {
                            this.setState(
                                {
                                    videoList: items,
                                    selectedVideo: items[0]
                                }
                            )
                        }

                        else {
                            this.setState(
                                {
                                    videoList: items,
                                    selectedVideo: null
                                }
                            )
                        }
                    }
                    else {
                        alert("No Items found ")
                    }
                }
            ).catch((err) => alert(err))
        ;


    }


    componentDidMount() {
        this.fetchYoutubeVids();
    }

    handleChange = (term) => {
        this.setState({term})
        this.fetchYoutubeVids(term);
    }

    handleTypeChange = (type) => {
        this.setState({type})
        this.fetchYoutubeVids(undefined, type);


    }


    setSelectedVideo = (selectedVideo) => {
        if (this.state.type == "video") {
            this.setState({
                selectedVideo
            })
        }
        else {
            this.setState({
                selectedVideo: {}
            })
        }

    }

    render() {
        const spinner = <div className="spinner"></div>;


        return (
            <div className="Youtube">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SearchBar
                                OnUserSearch={this.handleChange}
                                changeType={this.handleTypeChange}
                                term={this.state.term}
                                type={this.state.type}
                            />
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-md-9">
                            {
                                this.state.selectedVideo && this.state.selectedVideo.id ?
                                    <VideoPlayer video={this.state.selectedVideo}/> :
                                    spinner
                            }

                        </div>
                        <div className="col-md-3">

                            {
                                this.state.videoList && this.state.videoList.length ? <VideoList
                                    setSelectedVideo={this.setSelectedVideo}
                                    videoList={this.state.videoList}/> : spinner
                            }


                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default Youtube;
