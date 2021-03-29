import React from 'react'
import SignIn from './SignIn'

export default function Login({ loginUser , ...props }) {
    return (
        <section>
            <SignIn loginUser={loginUser} {...props}/>
        </section>
    )
}