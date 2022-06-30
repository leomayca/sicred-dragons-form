import React from 'react'

import history from '../../../routes/history'
import { routeType } from '../../../resources/routeTypes'

import { deleteDragon } from '../../../services/api/resources/dragons'

import { Card as CardDefault, StartDiv, EndDiv } from '../styles'

const Card = ({ item, ...props }) => {
    const handleDelete = () => {
        deleteDragon({}, item).then((res) => alert(res))
    }

    return (
        <React.Fragment>
            <CardDefault {...props}>
                <StartDiv>{item?.name}</StartDiv>
                <EndDiv>
                    <div
                        style={{ marginRight: '15px', cursor: 'pointer' }}
                        onClick={() =>
                            history.push(
                                routeType.DRAGONS_EDIT_ROOT + `/${item?.id}`
                            )
                        }
                    >
                        Editar
                    </div>
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleDelete()}
                    >
                        Excluir
                    </div>
                </EndDiv>
            </CardDefault>
        </React.Fragment>
    )
}

export { Card }
