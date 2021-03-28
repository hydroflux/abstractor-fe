import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import CreateAbstraction from '../../components/CreateAbstraction'

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
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="headline" color="inherit">
                        Abstractor                        
                    </Typography>
                    <CreateAbstraction />
                    {/* { renderRouteNavigation() } */}
                </Toolbar>
            </AppBar>
        </header>
    )
}
