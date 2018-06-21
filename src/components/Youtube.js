import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

export class Youtube extends Component {

    constructor(props) {

        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.setSelectedVideo = this.setSelectedVideo.bind(this)

        this.state = {
            term: '',
            videoList: [],
            selectedVideo: {},
        };


    }


    fetchYoutubeVids(term) {


        if (!term) {
            term = this.state.term
        }

        this.setState(
            {
                term,

            }
        );


        const api = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + this.state.term + '&type=video&videoDefinition=high&key=AIzaSyAzhkrAEax-6glljYL4U1GaEOwjSyydEpk';
        this.setState(
            {

                videoList: [],
                selectedVideo: {}
            }
        );

        fetch(api).then(
            function (response) {
                return response.json();
            }
        ).then((jsonData) => {
            if (jsonData.items && jsonData.items.length) {
                var items = jsonData.items;
                console.log(this.state);
                console.log('############ First item ');
                console.log("https://www.youtube.com/embed/" + jsonData.items[0].id.videoId);
                this.setState(
                    {
                        videoList: items,
                        selectedVideo: items[0]
                    }
                )
                return items

            }
        });


    }


    componentDidMount() {
        this.fetchYoutubeVids();


    }

    handleChange(term) {
        this.setState({term: term});
        this.fetchYoutubeVids(term);
    }

    setSelectedVideo(selectedVideo) {
        this.setState({
            selectedVideo
        })

    }

    render() {


        var player = <div className="spinner"></div>;
        var list = <div className="spinner"></div>;


        /******************************************************/


        if (this.state.videoList.length && this.state.selectedVideo) {

            player = <VideoPlayer video={this.state.selectedVideo}/>

            list = <VideoList
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
                                term={this.state.term}
                            />
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-md-9">
                            {player}

                        </div>
                        <div className="col-md-3">

                            {list}


                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default Youtube;
