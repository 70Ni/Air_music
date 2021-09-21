import React from 'react'
import Inputs from '../Inputs/Inputs'

function SignIn() {
    return (
        <div className="signIn_Wrapper">
            <div className="signHeader">Sign In</div>
            <Inputs type="email" placeholder="user@email.com" label="Email" />
            <Inputs type="password" placeholder="password" label="Password" />
            <Inputs type="submit" label="Password"  value="hello" />
        </div>
    )
}

export default SignIn
