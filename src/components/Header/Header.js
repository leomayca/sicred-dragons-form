import React, { useContext } from 'react'

import { AuthContext } from '../../contexts/auth.context'

import history from '../../routes/history'
import { routeType } from '../../resources/routeTypes'

import { HeaderDefault, Container, ButtonContainer, Start } from './styles'
import { Button } from '../Button'

const Header = () => {
    const { handleLogout } = useContext(AuthContext)

    return (
        <React.Fragment>
            <HeaderDefault>
                <Container>
                    <Start onClick={() => history.push(routeType.DRAGONS_ROOT)}>
                        Inicio
                    </Start>
                    <ButtonContainer>
                        <Button small onClick={handleLogout}>
                            Sair
                        </Button>
                    </ButtonContainer>
                </Container>
            </HeaderDefault>
        </React.Fragment>
    )
}

export { Header }
