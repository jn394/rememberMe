import React from 'react';
import './NavBar.css';

const rightStyle = {
    color: "green"
}

const wrongStyle = {
    color: "red"
}

function NavBar(prop) {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <h2 className="navbar-brand">Remember Me!</h2>
            <h2 className="mid" style={(prop.prompt==="You Guessed Correctly!")?rightStyle:wrongStyle}>{prop.prompt}</h2>
            <h2 className="scores">Score: {prop.score} | Top Score: {prop.topScore}</h2>
        </nav>
    );
}

export default NavBar;