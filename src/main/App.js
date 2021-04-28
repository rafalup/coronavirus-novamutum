import React, {Component} from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import Menu from './Menu';
/* import Covid19 from "./assets/emergencia.svg"
import "./css/estilo.css"; */

import Covid19 from "./../components/assets/emergencia.svg";
import "./../components/css/estilo.css";
import "./style.css";

class App extends Component {
    render() {
        return (
        <Router>
            <div className="App">
                <Menu/>
                <Routes/>

              

            </div>
        </Router>
        );
    }
}

export default App;
