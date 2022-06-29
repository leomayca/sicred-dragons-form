import React, { useContext, useState } from 'react'

import { AuthContext } from '../../../contexts/auth.context'

import { Container, ImageContainer, FormContainer } from './styles'
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'

const Login = () => {
    const { handleLogin } = useContext(AuthContext)
    const [login, setLogin] = useState({
        user: '',
        password: '',
    })

    const handleChange = (value, password) => {
        if (password === true) {
            setLogin({
                ...login,
                password: value,
            })
        } else {
            setLogin({
                ...login,
                user: value,
            })
        }
    }

    return (
        <React.Fragment>
            <Container>
                <ImageContainer />
                <FormContainer>
                    <h1>Entrar no Sicred Dragons</h1>
                    <Input
                        placeholder="Usuário"
                        handleChange={(e) => handleChange(e)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleLogin(login)
                            }
                        }}
                    />
                    <Input
                        password
                        placeholder="Senha"
                        handleChange={(e) => handleChange(e, true)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleLogin(login)
                            }
                        }}
                    />
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'right',
                            width: '100%',
                            marginTop: '5px',
                        }}
                    >
                        <Button
                            style={{ width: '30%' }}
                            onClick={() => handleLogin(login)}
                        >
                            Entrar
                        </Button>
                    </div>
                </FormContainer>
            </Container>
        </React.Fragment>
    )
}

export default Login
