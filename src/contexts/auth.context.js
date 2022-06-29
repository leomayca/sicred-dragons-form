import React, { createContext, useState, useEffect } from 'react'

import history from '../routes/history'
import { routeType } from '../resources/routeTypes'

const AuthContext = createContext()

const mockToken = 'ABACATE'

const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    const handleLogin = async (login) => {
        if (login?.user === 'dino' && login.password === 'abacate') {
            localStorage.setItem('auth', JSON.stringify(mockToken))
            setAuthenticated(true)
            history.push(routeType.DRAGONS_LIST)
        }
    }

    const handleLogout = async () => {
        setAuthenticated(false)
        localStorage.removeItem('auth')
        history.push(routeType.LOGIN)
    }

    useEffect(() => {
        const token = localStorage.getItem('auth')

        if (token) {
            setAuthenticated(true)
        }

        setLoading(false)
    }, [])

    // isso precisa existir
    if (loading) {
        return <h1>teste</h1>
    }

    return (
        <AuthContext.Provider
            value={{ authenticated, handleLogin, handleLogout, loading }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
