import React, { Component } from 'react';
import Covid19 from "./assets/emergencia.svg";
import "./css/estilo.css";

export class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="column-66">
                        <h1 className="large-font"><b>TODOS CONTRA O COVID-19</b></h1>
                        <p className="description-x"> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                        </p>
                    </div>

                    <div className="column-33">
                        <img src={Covid19} className="logo-mundo" alt="" />
                    </div>
                </div>
            </div>

        )
    }
};

export default Home;

