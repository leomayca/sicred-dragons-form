import React from 'react'

import history from '../../../../routes/history'
import { routeType } from '../../../../resources/routeTypes'

import { Title, GridContent, GridTemplate, Image } from '../styles'

import { Button } from '../../../../components/Button'
import { Input } from '../../../../components/Input'

const Form = ({ id, handleChange, handleClick, dragon }) => {
    return (
        <React.Fragment>
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
                            onClick={() => history.push(routeType.DRAGONS_LIST)}
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
        </React.Fragment>
    )
}

export { Form }
