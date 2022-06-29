import React from 'react'
import { Router } from 'react-router-dom'

import { AuthProvider } from './contexts/auth.context'

import './styles.css'

import Routes from './routes/routes'
import History from './routes/history'

const App = () => {
    return (
        <AuthProvider>
            <Router history={History}>
                <Routes />
            </Router>
        </AuthProvider>
    )
}

export default App
