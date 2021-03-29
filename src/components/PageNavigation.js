import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Login from './Login'
import PrivateRoute from './PrivateRoute'

export default function PageNavigation({ routes, loginUser, ...props }) {

    const renderLoginRoute = () => {
        return <Route exact path='/' render={ ( props ) => <Login {...props} loginUser={loginUser}/>} />
    }

    const renderPrivateRoutes = () => {
        return (
            routes.map( ({ title, path, component: Component , ...props }) => {
                const routePageKey = `${title.toLowerCase()}-page-key`
                return <PrivateRoute exact key={routePageKey} path={path} render={ ( routerProps ) => <Component {...routerProps} {...props} /> } />
            })
        )
    }

    return (
        <div className="page-route">
            <Switch>
                { renderLoginRoute() }
                { renderPrivateRoutes()}
            </Switch>
        </div>
    )
}
