import React, { useCallback, useContext, useState } from 'react';
import { Redirect, withRouter } from 'react-router';

import db from '../firebaseConfig';
import { Routes } from '../routes';
import { AuthContext } from '../Auth';
import InputText from './InputText';
import Button from './Button';
import Wrapper from './Wrapper';

const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const [password, setPassword] = useState('');
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleFormSubmit = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await db.auth().signInWithEmailAndPassword(email.value, password.value);
            history.push(Routes.HOME);
        } catch (error) {
            alert(error);
        }
    }, [history]);

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to={Routes.HOME} />;
    }

    return (
        <Wrapper isCentered>
            <h1 className="title is-1">
                Login
            </h1>
            <form onSubmit={handleFormSubmit}>
                <InputText
                    handleChange={handleEmailChange}
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                />
                <InputText
                    handleChange={handlePasswordChange}
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                />
                <Button type="submit" text="Submit" />
            </form>
        </Wrapper>
    )
}

export default withRouter(Login);