import React from 'react';
import aroundTheUs from "../images/aroundtheus.svg";
import { Link, useLocation } from 'react-router-dom';

function Header(props) {

    const setHeaderLink = () => {
        if (location.pathname === '/login') {
            props.showSignupPage();
        }
        if (location.pathname === '/signup') {
            props.showLoginPage();
        }
        else props.signOut();
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
            <p className="header__email">{props.userEmail}</p>
            <Link to={props.path}
                className="header__link"
                onClick={setHeaderLink}>
                {setHeaderLinkText()}
            </Link>
        </header>
    )
}

export default Header