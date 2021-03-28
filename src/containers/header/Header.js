import { NavLink } from 'react-router-dom'

export default function Header({ routes , loggedIn }) {

    const renderNavLinks = () => routes.map( ({ title, path }) => {
        const routeNavKey = `${title.toLowerCase()}-nav-key`
        return (
            <NavLink exact to={path} className="navigation-link" activeClassName="active" key={routeNavKey}>{title}</NavLink>
        )
    })

    const renderRouteNavigation = () => loggedIn ? renderNavLinks() : null

    return (
        <header>
            <nav className="navigation">
                { renderRouteNavigation() }
            </nav>
        </header>
    )
}
