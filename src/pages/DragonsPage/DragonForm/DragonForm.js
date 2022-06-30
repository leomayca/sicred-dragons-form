import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import {
    postDragon,
    putDragon,
    getDragonById,
} from '../../../services/api/resources/dragons'

import history from '../../../routes/history'
import { routeType } from '../../../resources/routeTypes'

import { Container, Content, ImageContainer } from '../DefaultStyles/styles'
import { Header } from '../../../components/Header'
import { Form } from './Form'
import { Details } from './Details'

const DragonForm = ({ edit }) => {
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
        if (id) {
            getDragonById({}, { id }).then(({ data }) => setDragon(data))
        }
    }, [])

    return (
        <React.Fragment>
            <Header />
            <ImageContainer />
            <Container>
                <Content>
                    {edit || !id ? (
                        <Form
                            id={id}
                            handleChange={handleChange}
                            handleClick={handleClick}
                            dragon={dragon}
                        />
                    ) : (
                        <Details dragon={dragon} />
                    )}
                </Content>
            </Container>
        </React.Fragment>
    )
}

export default DragonForm
