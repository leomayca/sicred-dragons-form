import React from 'react'
import moment from 'moment'

import history from '../../../../routes/history'
import { routeType } from '../../../../resources/routeTypes'

import { Title, GridContent, GridTemplate, Image } from '../styles'

import { Button } from '../../../../components/Button'
import { Text } from '../../../../components/Text'

const Details = ({ dragon }) => {
    return (
        <React.Fragment>
            <Title>Detalhes do Dragão</Title>
            <GridTemplate>
                <GridContent>
                    <Image />
                </GridContent>
                <GridContent style={{ height: '100%' }}>
                    <Text label="Nome">{dragon?.name}</Text>
                    <Text label="Tipo">{dragon?.type}</Text>
                    <Text label="Data de Criação">
                        {dragon?.createdAt
                            ? moment(dragon?.createdAt).format('DD/MM/yyyy')
                            : ''}
                    </Text>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'right',
                            width: '100%',
                            marginTop: '5px',
                        }}
                    >
                        <Button
                            style={{ width: '100%' }}
                            color="2"
                            onClick={() => history.push(routeType.DRAGONS_LIST)}
                        >
                            Voltar
                        </Button>
                    </div>
                </GridContent>
            </GridTemplate>
        </React.Fragment>
    )
}

export { Details }
