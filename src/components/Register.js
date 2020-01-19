import React, { useCallback, useState } from 'react';

import db from '../firebaseConfig';
import { Routes } from '../routes';

import InputText from './InputText';
import Button from './Button';

const Register = ({ history }) => {
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
            await db.auth().createUserWithEmailAndPassword(email.value, password.value);
            history.push(Routes.LOGIN);
        } catch (error) {
            alert(error);
        }
    }, [history]);
    return (
        <>
            <h1 className="title is-1">
                Register
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
        </>
    )
}

export default Register;