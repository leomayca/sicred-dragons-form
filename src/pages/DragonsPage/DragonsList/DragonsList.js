import React, { useState, useEffect } from 'react'

import history from '../../../routes/history'
import { routeType } from '../../../resources/routeTypes'

import { getDragons } from '../../../services/api/resources/dragons'

import { ImageContainer, Content, Container } from '../DefaultStyles/styles'
import { ButtonContainer } from './styles'
import { Header } from '../../../components/Header'
import { Button } from '../../../components/Button'
import { List } from '../../../components/List'

const DragonsList = () => {
    const [dragons, setDragons] = useState([])

    useEffect(() => {
        getDragons().then(({ data }) => {
            setDragons(data)
        })
    }, [])

    return (
        <React.Fragment>
            <Header />
            <ImageContainer />
            <Container>
                <Content>
                    <ButtonContainer>
                        <div style={{ fontWeight: 'bold', fontSize: '25px' }}>
                            Nome do Dragão
                        </div>
                        <Button
                            style={{ width: '160px' }}
                            onClick={() =>
                                history.push(routeType.DRAGONS_CREATE)
                            }
                        >
                            Novo Dragão
                        </Button>
                    </ButtonContainer>
                    <List list={dragons} />
                </Content>
            </Container>
        </React.Fragment>
    )
}

export default DragonsList
