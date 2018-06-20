import React, {Component} from 'react';


export class PlayerHolder extends Component {
    handleChange(e) {
        let title = e.target.value;
        this.props.changeTitle(title)
    }

    render() {

        return (
            <div className="PlayerHolder">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                            {/*component: search */}
                            <input
                                onChange={this.handleChange.bind(this)}
                                className={'form-control'}
                                value={this.props.title}
                                type="text"/>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-md-9">


                            <div className="card">

                                <iframe height="315" width="100%" src="https://www.youtube.com/embed/sITyhwEX6Ag"
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media" allowFullScreen></iframe>


                                <div className="card-body">
                                    <h5 className="card-title">{this.props.title}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and
                                        make up the bulk of the card's content.</p>
                                </div>
                            </div>


                        </div>

                        <div className="col-md-3">
                            <div className="card">
                                <iframe width="100%" src="https://www.youtube.com/embed/sITyhwEX6Ag"
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media" allowFullScreen></iframe>
                                <iframe width="100%" src="https://www.youtube.com/embed/sITyhwEX6Ag"
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media" allowFullScreen></iframe>
                                <iframe width="100%" src="https://www.youtube.com/embed/sITyhwEX6Ag"
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media" allowFullScreen></iframe>
                                <iframe width="100%" src="https://www.youtube.com/embed/sITyhwEX6Ag"
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media" allowFullScreen></iframe>
                                <iframe width="100%" src="https://www.youtube.com/embed/sITyhwEX6Ag"
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media" allowFullScreen></iframe>
                                <iframe width="100%" src="https://www.youtube.com/embed/sITyhwEX6Ag"
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media" allowFullScreen></iframe>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerHolder;

