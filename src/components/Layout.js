import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import App from "./App";

export class Layout extends Component {


    constructor() {
        super();
        /*
                this.init();
        */

        this.state = {title: "PHP"} // init value
        //
        // setTimeout(() => {
        //     this.setState({title: "Ola"})
        // }, 1000)
    }

    changeTitle(title) {
        this.setState({title});
    }



    render() {
        return (
            <div className="Layout">

                <Header/>
                <App
                    changeTitle={this.changeTitle.bind(this)}
                    title={this.state.title}
                />
                <Footer/>
            </div>
        );
    }
}

export default Layout;
