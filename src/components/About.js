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
                                <img src={Aglomeracao} className="pictures-item" alt="" width="209px"/>
                           
                                <p className="subdescription">Evite Aglomeração.</p>

                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <div className="card-container">
                               <img src={Mao} className="pictures-item" alt="" width="209px"/>

                                <p className="subdescription">higienize as mãos.</p>

                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <div className="card-container">
                                <img src={Mascara} className="pictures-item" alt="" width="209px"/>

                                <p className="subdescription">Use máscara.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
};

export default About;