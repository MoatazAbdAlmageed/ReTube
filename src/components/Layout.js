import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";

export class Layout extends Component {


    constructor() {
        super();

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
                <Jumbotron
                    changeTitle={this.changeTitle.bind(this)}
                    title={this.state.title}
                />
                <Footer/>
            </div>
        );
    }
}

export default Layout;
