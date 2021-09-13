import React from 'react';
import aroundTheUs from "../images/aroundtheus.svg";
import { Link, useLocation } from 'react-router-dom';

function Header(props) {

    const setHeaderLink = () => {
        if (location.pathname === '/login') {
            props.showSignupPage();
        }
        else props.showLoginPage();
    }

    const location = useLocation();

    return (
        <header className="header">
            <img className="header__img" src={aroundTheUs} alt="Around the U.S." />
            {/* this link needs to be changed depending on whether not we are on the signup page or login page */}
            <Link to={props.path} className="header__link"  onClick={setHeaderLink}>{location.pathname}</Link>
        </header>
    )
}

export default Header