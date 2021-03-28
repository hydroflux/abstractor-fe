import React from 'react'
import SignIn from '../../components/SignIn'
import PageNavigation from '../../components/PageNavigation'

export default function Main({ routes , loggedIn, toggleLogin }) {

    const renderMain = () => {
        return (
            loggedIn ? <PageNavigation routes={ routes }/> : <SignIn toggleLogin={toggleLogin}/>
            )
    }

    return (
        <main>
            { renderMain() }
        </main>
    )
}
