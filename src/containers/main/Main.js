import React from 'react'
import Navigation from '../../components/Navigation'

export default function Main({ routes }) {
    return (
        <main>
            <Navigation routes={ routes }/>
        </main>
    )
}
