import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

export class PlayerHolder extends Component {

    constructor(props) {
        super(props);

    }


    handleChange(e) {
        let term = e.target.value;
        this.props.changeTitle(term);
        this.video = term;
        debugger
        var element = document.getElementById('player');
        this.loadClientWhenGapiReady(null, term);
        if (element) {

            element.src = 'https://www.youtube.com/embed/' + this.video + '?enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=1';

        }


    }

    render() {

        return (
            <div className="PlayerHolder">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SearchBar/>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-md-9">
                            <VideoPlayer/>

                        </div>
                        <div className="col-md-3">
                            <VideoList/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default PlayerHolder;
