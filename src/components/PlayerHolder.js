import React, {Component} from 'react';

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

                            <input
                                onChange={this.handleChange.bind(this)}
                                className={'form-control'}
                                value={this.props.term}
                                type="text"/>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-md-9">


                            <div className="card">


                                <div className="embed-responsive embed-responsive-16by9" id="player"></div>

                                {/*   <iframe height="315" width="100%" src="https://www.youtube.com/embed/sITyhwEX6Ag"
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media" allowFullScreen></iframe>

*/}
                                <div className="card-body">
                                    <h5 className="card-term">{this.props.term}</h5>
                                    <p className="card-text">Some quick example text to build on the card term and
                                        make up the bulk of the card's content.</p>
                                </div>
                            </div>


                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <iframe width="100%" src="https://www.youtube.com/embed/sITyhwEX6Ag"
                                        frameBorder="0"
                                        showinfo="0" controls="0"
                                ></iframe>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default PlayerHolder;
