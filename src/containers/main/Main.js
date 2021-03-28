import React from 'react'
import SignIn from '../../components/SignIn'
import { Grid } from '@material-ui/core'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

export default function Main({ routes , loggedIn, toggleLogin }) {

    const handleSignIn = () => {
        return (
            loggedIn ? renderMain() : <SignIn toggleLogin={toggleLogin}/>
            )
    }

    const renderMain = () => {
        return (
            <Grid container>
                <Grid item sm>
                    <LeftPane />
                </Grid>
                <Grid item sm>
                    <RightPane routes={routes}/>
                </Grid>
            </Grid>
        )
    }

    return (
        <main>
            {handleSignIn()}
        </main>
    )
}
