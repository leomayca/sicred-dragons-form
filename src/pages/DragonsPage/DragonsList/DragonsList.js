import React, { useState, useEffect } from 'react'

import { getDragons } from '../../../services/api/resources/dragons'

import { ImageContainer, Content, Container, ButtonContainer } from './styles'
import { Header } from '../../../components/Header'
import { Button } from '../../../components/Button'
import { List } from '../../../components/List'

const DragonsList = () => {
    const [dragons, setDragons] = useState([])

    useEffect(() => {
        getDragons()
            .then(({ data }) => {
                setDragons(data)
            })
            // eslint-disable-next-line no-console
            .catch((e) => console.error(e))
    }, [])

    return (
        <React.Fragment>
            <Header />
            <ImageContainer />
            <Container>
                <Content>
                    <ButtonContainer>
                        <Button style={{ width: '160px' }}>Novo Dragão</Button>
                    </ButtonContainer>
                    <List list={dragons} />
                </Content>
            </Container>
        </React.Fragment>
    )
}

export default DragonsList
