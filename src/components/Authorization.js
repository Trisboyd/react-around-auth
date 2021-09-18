import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import * as auth from '../utils/auth';

function Authorization({ props, handleRegistration, handleLogin, loggedIn }) {

    const history = useHistory();

    const { name, message, path, clickSubmitButton } = props;

    const [formState, setFormState] = React.useState({
        email: '',
        password: ''
    });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

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
        if (formState.email && formState.password) {
            auth.register(formState)
            .then((res) => {
                if (res) {
                    handleRegistration();
                    // handleLogin should maybe go here so user can get to /main
                    history.push('/main');
                }
            })
        }
        clickSubmitButton();
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!username || !password) return false;
    
    //     duckAuth
    //       .authorize(username, password)
    //       .then((data) => {
    //         if (!data) {
    //           return setMessage('Something went wrong, please try again.');
    //         }
    
    //         if (data.jwt) {
    //           setMessage('');
    //           handleLogin();
    //           history.push('/ducks', { newRegistration: true });
    //         }
    //       })
    //       .catch((err) => console.log(err));
    //   };

    const handleSignin = () => {
        if (!formState.email || !formState.password) {
            return false;
        }
        auth.authorize(formState)
        .then((data) => {
            if (!data) {
                return;
            }
            if (data.token) {
                handleLogin();
                history.push('/main');
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (location.pathname === '/signup') {
            handleRegister();
        }
        else handleSignin();
    }

    return (
        <section className="auth">
            <form className="edit-box edit-box_auth">
                <h2 className="auth__title">{name}</h2>
                <input type="text"
                    className="auth__input"
                    name='email'
                    placeholder="Email"
                    onChange={handleChange}></input>
                <input
                    type="text"
                    className="auth__input"
                    name='password'
                    placeholder="Password"
                    onChange={handleChange}></input>
                <button type="submit" id="login" className="edit-box__submit edit-box__submit_auth" name="edit-box-submit"
                    aria-label="submit" value="Login" onClick={handleSubmit}>{name}</button>
                <Link to={path} className="auth__text">{message}</Link>
            </form>
        </section>
    )
}

export default Authorization