import styled from 'styled-components'

export const HeaderDefault = styled.div`
    background-color: #111;
    width: 100%;
    height: 50px;
    position: fixed;
    z-index: 10;
    display: flex;
    align-items: center;
    border-bottom: solid 2px #3c1d20;
`

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    color: white;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 10px;
`

export const Start = styled.div`
    cursor: pointer;
    user-select: none;
    font-weight: 600;
`
