import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
// import { NavLink } from 'react-bootstrap'
// import CreateAbstraction from '../../components/CreateAbstraction'
  
  export default function Header({ routes , isLoggedIn, logoutUser, setAbstraction, abstraction }) {
      const renderMenuButtons = () => {
          if (isLoggedIn){
              return(
                <div className="menu-buttons">
                    <Button color="inherit" className="button" href="/" onClick={logoutUser}>Logout</Button>
                    {/* <CreateAbstraction className="button" setAbstraction={setAbstraction} abstraction={abstraction}/> */}
                </div>
              )
          } else { return null }
      }

    return (
        <header>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" color="inherit">
                        Abstractor                        
                    </Typography>
                    {renderMenuButtons()}
                </Toolbar>
            </AppBar>
        </header>
    )
}


// const renderNavLinks = () => routes.map( ({ title, path }) => {
    //     const routeNavKey = `${title.toLowerCase()}-nav-key`
    //     return (
    //         <NavLink exact to={path} className="navigation-link" activeClassName="active" key={routeNavKey}>{title}</NavLink>
    //         <NavLink exact="true" to={path} className="navigation-link" activeclassname="active" key={routeNavKey}>{title}</NavLink>
    //     )
    // })

    // const renderRouteNavigation = () => isLoggedIn ? renderNavLinks() : null