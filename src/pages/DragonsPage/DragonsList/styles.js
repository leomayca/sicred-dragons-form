import styled from 'styled-components'

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 35px;
`

export const Text = styled.div`
    font-weight: bold;
    font-size: 25px;

    @media (max-width: 480px) {
        font-size: 20px;
    }
`
