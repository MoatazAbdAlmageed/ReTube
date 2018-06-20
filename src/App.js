import React, {Component} from 'react';

import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Youtube from "./components/Youtube";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Youtube/>
                <Footer/>
            </div>
        );
    }
}

export default App;
