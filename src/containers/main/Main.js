import PageNavigation from '../../components/PageNavigation'

export default function Main({ isLoggedIn, loginUser, routes }) {

    const renderMain = () => {
        return (
            <PageNavigation isLoggedIn={isLoggedIn} loginUser={ loginUser } routes={ routes }/>
        )
    }

    return (
        <main>
            {renderMain()}
        </main>
    )
}
