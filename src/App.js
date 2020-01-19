import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { AuthProvider } from './Auth';
import { Routes } from './routes';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Wrapper from './components/Wrapper';

import './bulma.min.css';
import './App.css';

const App = () => (
    <AuthProvider>
        <Router>
            <Wrapper>
                <PrivateRoute exact path={Routes.HOME} component={Home} />
                <Route path={Routes.REGISTER} component={Register} />
                <Route path={Routes.LOGIN} component={Login} />
            </Wrapper>
        </Router>
    </AuthProvider>
);

export default App;
