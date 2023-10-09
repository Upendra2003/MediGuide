import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

export default function LoginPage() {

    let {loginUser} = useContext(AuthContext)

    return (
        <>
        <form onSubmit={loginUser}>
            <input type="text" name='username' />
            <input type="password" name='password' />
            <input type="submit" value='submit' />
        </form>
        </>
    )
}
