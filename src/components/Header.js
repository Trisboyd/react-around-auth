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

    const setHeaderLinkText = () => {
        if (location.pathname === '/login') {
            return "Sign up"
        }
        if (location.pathname === '/signup') {
            return "Log in"
        }
        else return 'Log out'
    };

    return (
        <header className="header">
            <img className="header__img" src={aroundTheUs} alt="Around the U.S." />
            {/* this link needs to be changed depending on whether not we are on the signup page or login page */}
            <Link to={props.path} className="header__link"  onClick={setHeaderLink}>{setHeaderLinkText()}</Link>
        </header>
    )
}

export default Header