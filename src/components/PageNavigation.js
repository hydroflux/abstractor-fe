import React from 'react'

import { Route, Switch } from 'react-router-dom'

export default function PageNavigation({ routes }) {

    const renderRoutePages = () => {
        return (
            routes.map( ({ title, path, component: Component , ...props }) => {
                const routePageKey = `${title.toLowerCase()}-page-key`

                return <Route exact key={routePageKey} path={path} render={ ( routerProps ) => <Component {...routerProps} {...props} /> } />
            })
        )
    }

    return (
        <div className="page-route">
            <Switch>
                { renderRoutePages()}
            </Switch>
        </div>
    )
}
