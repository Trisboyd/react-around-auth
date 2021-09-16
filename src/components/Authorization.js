import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as auth from '../utils/auth';

function Authorization(props) {

    // const history = useHistory();
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
        props.clickSubmitButton();
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
                <h2 className="auth__title">{props.name}</h2>
                <input type="text" className="auth__input" placeholder="Email"></input>
                <input type="text" className="auth__input" placeholder="Password"></input>
                <button type="submit" id="login" className="edit-box__submit edit-box__submit_auth" name="edit-box-submit"
                    aria-label="submit" value="Login" onClick={handleSubmit}>{props.name}</button>
                <Link to={props.path} className="auth__text">{props.message}</Link>
            </form>
        </section>
    )
}

export default Authorization