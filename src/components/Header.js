import React from 'react';
import aroundTheUs from "../images/aroundtheus.svg";
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="header">
            <img className="header__img" src={aroundTheUs} alt="Around the U.S." />
            {/* this link needs to be changed depending on whether not we are on the signup page or login page */}
            <Link to='/login' className="header__link">Log in</Link>
        </header>
    )
}

export default Header