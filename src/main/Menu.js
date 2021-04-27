import {Link} from 'react-router-dom';
import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../components/assets/x.svg";
import { ReactComponent as MenuIcon } from "../components/assets/menu.svg";
import { ReactComponent as Logo } from "../components/assets/brasao.svg";
import "./menu.css";

const Menu = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
      
        <div className="header">
          <div className="logo-nav">
            <div className="logo-container">
              <Logo className="logo" />
  
            </div>
            <ul className={click ? "nav-options active" : "nav-options"}>
              <li className="option" onClick={closeMobileMenu}>
                <Link to="/">HOME</Link>
  
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <Link to="/About">ABOUT</Link>
  
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <Link to="/Contact">CONTATO</Link>
  
              </li>
            </ul>
          </div>
  
          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <CloseMenu className="menu-icon" />
            ) : (
              <MenuIcon className="menu-icon" />
            )}
          </div>
        </div>
     
    );
};



export default Menu;
