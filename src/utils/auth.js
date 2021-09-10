//   Routes code
export const BASE_URL = 'https://register.nomoreparties.co';

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err));
};

// route code

import { Route, Switch, Redirect } from 'react-router-dom';

// loggedIn state variable
const [loggedIn, setLoggedIn] = React.useState(false);

<Switch>
    <Route path="/signup">
        <Register />
    </Route>
    <Route path="/signin">
        <Login />
    </Route>
    <Route exact path="/">
        {loggedIn ? <Redirect to="/signup" /> : <Redirect to="/signin" />}
    </Route>
</Switch>