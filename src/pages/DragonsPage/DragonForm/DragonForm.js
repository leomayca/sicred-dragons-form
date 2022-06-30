import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import {
    postDragon,
    putDragon,
    getDragonById,
} from '../../../services/api/resources/dragons'

import history from '../../../routes/history'
import { routeType } from '../../../resources/routeTypes'

import { Title, GridTemplate, GridContent, Image } from './styles'
import { Container, Content, ImageContainer } from '../DefaultStyles/styles'
import { Header } from '../../../components/Header'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'

const DragonForm = () => {
    const { id } = useParams()
    const [dragon, setDragon] = useState({
        name: '',
        type: '',
    })

    const handleChange = (value, type) => {
        if (type === true) {
            setDragon({
                ...dragon,
                type: value,
            })
        } else {
            setDragon({
                ...dragon,
                name: value,
            })
        }
    }

    const handleClick = () => {
        if (id) {
            putDragon(dragon, { id }).then(() =>
                history.push(routeType.DRAGONS_LIST)
            )
        } else {
            postDragon(dragon).then(() => history.push(routeType.DRAGONS_LIST))
        }
    }

    useEffect(() => {
        getDragonById({}, { id }).then(({ data }) => setDragon(data))
    }, [])

    return (
        <React.Fragment>
            <Header />
            <ImageContainer />
            <Container>
                <Content>
                    <Title>{id ? 'Editar' : 'Criar'} Dragão</Title>
                    <GridTemplate>
                        <GridContent>
                            <Image />
                        </GridContent>
                        <GridContent>
                            <Input
                                label="Nome"
                                handleChange={(e) => handleChange(e)}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        handleClick()
                                    }
                                }}
                                value={dragon?.name}
                            />
                            <Input
                                label="Tipo"
                                handleChange={(e) => handleChange(e, true)}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        handleClick()
                                    }
                                }}
                                value={dragon?.type}
                            />
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    marginTop: '5px',
                                }}
                            >
                                <Button
                                    style={{ width: '47%' }}
                                    color="2"
                                    onClick={() =>
                                        history.push(routeType.DRAGONS_LIST)
                                    }
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    style={{ width: '47%' }}
                                    onClick={() => handleClick()}
                                >
                                    {id ? 'Editar' : 'Criar'}
                                </Button>
                            </div>
                        </GridContent>
                    </GridTemplate>
                </Content>
            </Container>
        </React.Fragment>
    )
}

export default DragonForm
