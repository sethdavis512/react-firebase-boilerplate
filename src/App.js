import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { AuthProvider } from './Auth';
import { Routes } from './routes';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

import './bulma.min.css';
import './App.css';

const App = () => (
    <AuthProvider>
        <Router>
            <Route path={Routes.REGISTER} component={Register} />
            <Route path={Routes.LOGIN} component={Login} />
            <PrivateRoute exact path={Routes.HOME} component={Home} />
        </Router>
    </AuthProvider>
);

export default App;
