import React, { useContext } from 'react'

import { AuthContext } from '../../../contexts/auth.context'

const Login = () => {
    const { handleLogin } = useContext(AuthContext)

    return (
        <React.Fragment>
            <input type="text" />
            <input type="password" />
            <button type="button" onClick={handleLogin}>
                Login
            </button>
        </React.Fragment>
    )
}
export default Login
