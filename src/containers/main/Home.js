import React from 'react'
import CreateAbstraction from '../../components/CreateAbstraction'

export default function Home({setAbstraction, abstraction}) {
    return (
        <section className="home">
            <CreateAbstraction 
                setAbstraction={setAbstraction}
                abstraction={abstraction}
            />
        </section>
    )
}
