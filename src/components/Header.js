import React from 'react';
import aroundTheUs from "../images/aroundtheus.svg";

function Header() {
    return (
        <header className="header">
            <img className="header__img" src={aroundTheUs} alt="Around the U.S." />
        </header>
    )
}

export default Header