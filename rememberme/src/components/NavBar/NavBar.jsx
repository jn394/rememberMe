import React from 'react';
import './NavBar.css';

function NavBar(prop) {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <a className="navbar-brand">Remember Me</a>
            <a className="mid">Click an image to begin!</a>
            <a className="scores">Score: {prop.score} | Top Score: {prop.topScore}</a>
        </nav>
    );
}

export default NavBar;