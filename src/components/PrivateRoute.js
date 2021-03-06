import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuthContext } from '../Auth'
import { Routes } from '../routes'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = useAuthContext()

    return (
        <Route
            {...rest}
            render={routeProps =>
                !!currentUser ? (
                    <Component {...routeProps} />
                ) : (
                    <Redirect to={Routes.LOGIN} />
                )
            }
        />
    )
}

export default PrivateRoute
