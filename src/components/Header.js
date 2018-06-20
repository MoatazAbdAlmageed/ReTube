import React, {Component} from 'react';


export class Header extends Component {

    render() {
        return (

            <div className="Header">

                <nav className="site-header sticky-top py-1 mtz">
                    <div className="container d-flex flex-column flex-md-row justify-content-between">
                        <a className="py-2" href="/">
                            HOME
                        </a>

                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
