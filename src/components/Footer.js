import React, {Component} from 'react';
import Header from "./Header";


export class Footer extends Component {

    constructor() {
        super();
        this.state = {copyright: "Album example is © Bootstrap, but please download and customize it for yourself!"}
    }

    render() {
        return (
            <div className="Footer">
                <footer className="text-muted">
                    <div className="container">
                        <p className="float-right">
                            <a href="#">Back to top</a>
                        </p>
                        <p>{this.state.copyright}</p>
                        <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a
                            href="../../getting-started/">getting started guide</a>.</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
