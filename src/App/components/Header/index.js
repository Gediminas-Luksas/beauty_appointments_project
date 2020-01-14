import React from 'react';
import './index.css';

import logo from '../../../images/logo.png';
import heaserCard from '../../../images/Icon.png';


const Header = () => {

    return (
        <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__logo">
                <a href="/"><img src={logo} alt="Logo" /></a>
            </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul className="toolbar_navigation-items">
                <li><a href="/">Home</a></li>
                <li><a href="/">About Me</a></li>
                <li><a href="/">Book Now</a></li>
                <li><a href="/">Login</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
            </ul>
        </div>
        <div className="header_card">
            <img src={heaserCard} alt="Header Card" />
        </div>
        <div className="toggle-burger">
        <div className="nav-circle" />
            <button className="toggle-button">
                <div className="button__line" />
                <div className="button__line" />
                <div className="button__line" />
            </button>
        </div>
        </nav>
        </header>
    );
}

export default Header;