import { NavLink } from 'react-router-dom'

export default function Header({ routes }) {

    const renderRouteNavigation = () => routes.map( ({ title, path }) => {
        
        const routeNavKey = `${title.toLowerCase()}-nav-key`
    
        return (
            <NavLink exact to={path} className="navigation-link" activeClassName="active" key={routeNavKey}>{title}</NavLink>
        )
    })
    return (
        <header>
            <nav className="navigation">
                { renderRouteNavigation() }
            </nav>
        </header>
    )
}
