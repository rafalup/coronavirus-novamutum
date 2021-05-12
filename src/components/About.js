import React, { Component } from 'react';

import "./css/estilo.css";

import Aglomeracao from "./assets/new-normality.svg";
import Mascara from "./assets/patient.svg";
import Mao from "./assets/wash-your-hands.svg";

export class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    
                    <div className="column">
                        <div className="card">
                            <div className="card-container">
                                <img src={Aglomeracao} className="pictures-item" alt="" />
                           
                                {/* <p className="subdescription">You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                   ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi
                                   ut aliquip ex ea commodo consequat.
                                </p> */}

                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <div className="card-container">
                               <img src={Mao} className="pictures-item" alt="" />

                               {/*  <p className="subdescription">You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                   ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi
                                   ut aliquip ex ea commodo consequat.
                                </p> */}

                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <div className="card-container">
                                <img src={Mascara} className="pictures-item" alt="" />

                                {/* <p className="subdescription">You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                   ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi
                                   ut aliquip ex ea commodo consequat.
                                </p> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
};

export default About;