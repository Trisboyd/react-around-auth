import React from 'react';
import { Link } from 'react-router-dom';

function Login() {

    return (
        <section className="auth">
            <form className="edit-box edit-box_auth">
                <h2 className="auth__title">Log in</h2>
                <input type="text" className="auth__input" placeholder="Email"></input>
                <input type="text" className="auth__input" placeholder="Password"></input>
                <button type="submit" id="login" className="edit-box__submit edit-box__submit_auth" name="edit-box-submit"
                    aria-label="submit" value="Login">Log in</button>
                {/* add logic here for which page we're on */}
                <Link to="/login" className="auth__text">Already a member? Log in here!</Link>
            </form>
        </section>
    )
}

export default Login