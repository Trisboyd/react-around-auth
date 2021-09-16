import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import * as auth from '../utils/auth';

function Authorization({ handleChange, formState, props }) {

    const history = useHistory();

    const { name, message, path, clickSubmitButton } = props;

    // const { email, password } = formState;
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
  
    //   if (password === confirmPassword) {
    //     duckAuth.register(username, password, email).then((res) => {
    //       if (res) {
    //         setMessage('');
    //         history.push('/ducks');
    //       } else {
    //         setMessage('Something went wrong, please try again.');
    //       }
    //     });
    //   }
    // };

    const location = useLocation();
    
    const handleRegister = () => {
        clickSubmitButton();
    }

    const handleLogin = () => {
        // this is for the submit button for Login page, not signup
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (location.pathname === '/signup') {
            handleRegister();
        }
        else handleLogin();
    }

    return (
        <section className="auth">
            <form className="edit-box edit-box_auth">
                <h2 className="auth__title">{name}</h2>
                <input type="text" className="auth__input" placeholder="Email"></input>
                <input type="text" className="auth__input" placeholder="Password"></input>
                <button type="submit" id="login" className="edit-box__submit edit-box__submit_auth" name="edit-box-submit"
                    aria-label="submit" value="Login" onClick={handleSubmit}>{name}</button>
                <Link to={path} className="auth__text">{message}</Link>
            </form>
        </section>
    )
}

export default Authorization