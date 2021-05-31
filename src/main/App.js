import React, {Component} from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import Menu from './Menu';
import Footer from './Footer';


import "./../components/css/estilo.css";
import "./style.css";

class App extends Component {
    render() {
        return (
        <Router>
            <div className="App">
                <Menu/>
                <Routes/>
                <Footer/>

              

            </div>
        </Router>
        );
    }
}

export default App;
