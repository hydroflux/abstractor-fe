import PageNavigation from '../../components/PageNavigation'

export default function Main({ loginUser, routes }) {

    // const handleSignIn = () => {
    //     return (
    //         loggedIn ? renderMain() : <SignIn toggleLogin={toggleLogin}/>
    //         )
    // }

    const renderMain = () => {
        return (
            <PageNavigation loginUser={loginUser} routes={ routes }/>
        )
    }

    return (
        <main>
            {renderMain()}
        </main>
    )
}
