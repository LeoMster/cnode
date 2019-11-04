import React from 'react'
import { Route } from 'react-router-dom'

const RouteCre = (route) => {
    if (route.exact) {
        return (
            <Route
                exact
                path={route.path}
                render={props => (
                    <route.component {...props} routes={route.routes} p={route.path} />
                )}
            />
        )
    } else {
        return (
            <Route
                path={route.path}
                render={props => (
                    <route.component {...props} routes={route.routes} p={route.path} />
                )}
            />
        )
    }
}

export default RouteCre