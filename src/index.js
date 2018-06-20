import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";


const app = document.getElementById('root');

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App}/>

        </div>
    </Router>,
    app)



