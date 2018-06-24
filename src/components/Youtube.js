import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

export class Youtube extends Component {

    constructor(props) {

        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleTypeChange = this.handleTypeChange.bind(this)
        this.setSelectedVideo = this.setSelectedVideo.bind(this)

        this.state = {
            term: '',
            type: 'video', // || playlis
            videoList: [],
            selectedVideo: {},
        };


    }


    fetchYoutubeVids(term = this.state.term, type = this.state.type) {

        if (!term) {
            term = this.state.term
        }

        if (!type) {
            type = this.state.type
        }

        this.setState(
            {
                term,
                type

            }
        );


        const api = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.term}&type=${this.state.type}&key=AIzaSyAzhkrAEax-6glljYL4U1GaEOwjSyydEpk`;


        fetch(api).then(
            function (response) {
                return response.json();
            }
        ).then((jsonData) => {
            if (jsonData.items && jsonData.items.length) {

                var items = jsonData.items;
                console.log('############ First item ');
                console.log("https://www.youtube.com/embed/" + items[0].id.videoId);
                this.setState(
                    {
                        videoList: items,
                        selectedVideo: items[0]
                    }
                )


            }
        });


    }


    componentWillMount() {

        this.player = <div className="spinner"></div>;
        this.list = <div className="spinner"></div>;

        this.fetchYoutubeVids();


    }

    handleChange(term) {
        this.fetchYoutubeVids(term);
    }

    handleTypeChange(type) {
        if (type) {
            this.setState({type})
        }

        this.fetchYoutubeVids(undefined, type);


    }


    setSelectedVideo(selectedVideo) {

        if (this.state.type == "video") {
            this.setState({
                selectedVideo
            })
        }
        else {
            console.log(selectedVideo);
            this.setState({
                selectedVideo: {}
            })
        }

    }

    render() {



        /******************************************************/


        if (this.state.videoList.length && this.state.selectedVideo) {

            this.player = <VideoPlayer video={this.state.selectedVideo}/>

            this.list = <VideoList
                setSelectedVideo={this.setSelectedVideo}
                videoList={this.state.videoList}/>

        }
        else {

        }
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
                            {this.player}

                        </div>
                        <div className="col-md-3">

                            {this.list}


                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default Youtube;
