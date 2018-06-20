import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import PlayerHolder from "./PlayerHolder";

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
                <PlayerHolder
                    changeTitle={this.changeTitle.bind(this)}
                    title={this.state.title}
                />
                <Footer/>
            </div>
        );
    }
}

export default Layout;
