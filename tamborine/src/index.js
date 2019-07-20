import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Navigation from './components/navigation.js'
import Cross from './components/Cross.js'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/navigation" component={Navigation} />
            <Route path="/cross" component={Cross} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
