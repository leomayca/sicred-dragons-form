import React from 'react'

import map from 'lodash/map'
import sortBy from 'lodash/sortBy'
import { Container } from './styles'
import { Card } from './Card'

const List = ({ list, ...props }) => {
    const handleList = () => {
        const sortedDragons = sortBy(list, ['name'])

        const dragonsCard = map(sortedDragons, (item, index) => {
            return (
                <>
                    <Card key={index} item={item} />
                </>
            )
        })
        return dragonsCard
    }

    return (
        <React.Fragment>
            <Container {...props}>{handleList()}</Container>
        </React.Fragment>
    )
}

export { List }
