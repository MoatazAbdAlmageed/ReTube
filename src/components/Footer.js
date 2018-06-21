import React, {Component} from 'react';


export class Footer extends Component {

    constructor() {
        super();
        this.state = {copyright: "ReTube © 2018"}
    }

    render() {
        return (
            <div className="Footer">
                <footer className="text-muted">
                    <div className="container">
                        <p>{this.state.copyright}</p>

                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
