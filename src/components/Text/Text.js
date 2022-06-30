import React from 'react'

import { Container, Label, Span } from './styles'

const Text = ({ children, label, ...props }) => {
    return (
        <React.Fragment>
            <Container {...props}>
                <Label>{label}</Label>
                <Span>{children}</Span>
            </Container>
        </React.Fragment>
    )
}

export { Text }
