import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// import {Router, Route, IndexRoute, hashHistory} from 'react-router'

// import {
//     HashRouter,
//     Route,
//     Link
// } from 'react-router-dom';

import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


const app = document.getElementById('root');

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Layout}/>
            {/*<Route path="/header" component={Header}/>*/}
            {/*<Route path="/footer" component={Footer}/>*/}
        </div>
    </Router>,
    app)
// ,registerServiceWorker();



