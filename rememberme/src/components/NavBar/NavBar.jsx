import React from 'react';
import './NavBar.css';

function NavBar(prop) {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <h2 className="navbar-brand">Remember Me</h2>
            <h2 className="mid">{prop.prompt}</h2>
            <h2 className="scores">Score: {prop.score} | Top Score: {prop.topScore}</h2>
        </nav>
    );
}

export default NavBar;