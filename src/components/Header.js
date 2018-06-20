import React, {Component} from 'react';


export class Header extends Component {
    //
    // constructor() {
    //     super();
    //     this.state = {}
    // }

    // navigate() {
    //
    //     this.props.history.replaceState(null, "/")
    // }


    render() {
        return (

            <div className="Header">

                <nav className="site-header sticky-top py-1 mtz">
                    <div className="container d-flex flex-column flex-md-row justify-content-between">
                        <a className="py-2" href="/">
                            HOME
                        </a>
                        {/*   <a className="py-2 d-none d-md-inline-block" href="/header">Header</a>
                        <a className="py-2 d-none d-md-inline-block" href="/footer">Footer</a>*/}
                        {/*<a onClick={this.navigate.bind(this)} className="py-2 d-none d-md-inline-block"*/}
                        {/*href="/footer">Back</a>*/}

                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
