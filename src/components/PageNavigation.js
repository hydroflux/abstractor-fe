import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Login from './Login'
import PrivateRoute from './PrivateRoute'

export default function PageNavigation({ isLoggedIn, loginUser, routes, ...props }) {

    const renderLoginRoute = () => {
        return <Route exact path='/' render={ ( props ) => <Login {...props} loginUser={loginUser}/>} />
    }

    const renderPrivateRoutes = () => {
        return (
            routes.map( ({ title, path, component: Component , ...props }) => {
                const routePageKey = `${title.toLowerCase()}-page-key`
                return (
                    <PrivateRoute
                        exact
                        key={routePageKey}
                        path={path}
                    >{<Component {...props} />}
                    </PrivateRoute>
                )
            })
        )
    }

    return (
        <div className="page-route">
            <Switch>
                { renderLoginRoute() }
                { isLoggedIn ? renderPrivateRoutes() : null }
            </Switch>
        </div>
    )
}
