import React from 'react';
import { Link } from 'react-router-dom';

function Authorization(props) {

    const setHeaderLink = () => {
        props.setHeaderLink();
    }

    const confirmRegister = () => {
        // need to add the actual registration confirmation, but for now this
        // simply opens the YOU ARE REGISTERED POPUP
        props.clickSubmitButton();
    }

    const confirmLogin = () => {
        // this is for the submit button for Login page, not signup
    }

    return (
        <section className="auth">
            <form className="edit-box edit-box_auth">
                <h2 className="auth__title">{props.name}</h2>
                <input type="text" className="auth__input" placeholder="Email"></input>
                <input type="text" className="auth__input" placeholder="Password"></input>
                <button type="submit" id="login" className="edit-box__submit edit-box__submit_auth" name="edit-box-submit"
                    aria-label="submit" value="Login" onClick={confirmRegister}>{props.name}</button>
                <Link to={props.path} className="auth__text" onClick={setHeaderLink}>{props.message}</Link>
            </form>
        </section>
    )
}

export default Authorization