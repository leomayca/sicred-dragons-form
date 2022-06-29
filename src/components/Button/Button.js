import React from 'react'

import { ButtonDefault } from './styles'

const Button = ({ children, ...props }) => {
    return (
        <React.Fragment>
            <ButtonDefault {...props}>
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        heigth: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {children}
                </div>
            </ButtonDefault>
        </React.Fragment>
    )
}

export { Button }
