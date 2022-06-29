import React, { useState } from 'react'

import { InputDefault, Container, Label } from './styles'

const Input = ({ label, password, handleChange, ...props }) => {
    const [value, setValue] = useState('')

    const onChange = (item) => {
        setValue(item)
        if (handleChange && typeof handleChange == 'function') {
            handleChange(item)
        }
    }

    return (
        <React.Fragment>
            <div style={{ width: '100%' }}>
                {label && <Label {...props}>{label}</Label>}
            </div>
            <Container>
                <InputDefault
                    type={password ? 'password' : 'text'}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    {...props}
                />
            </Container>
        </React.Fragment>
    )
}

export { Input }
