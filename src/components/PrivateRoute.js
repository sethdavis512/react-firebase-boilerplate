import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Auth';
import { Routes } from '../routes';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={routeProps =>
                !!currentUser
                ? <RouteComponent {...routeProps} />
                : <Redirect to={Routes.LOGIN} />
            }
        />
    );
}

export default PrivateRoute;