import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    background: linear-gradient(90deg, #111, #3c1d20);
    width: 100%;
    height: 100%;
    align-items: center;
    margin-top: 30px;
    color: white;
    border-radius: 10px;
    border: solid 2px #111;
`

export const StartDiv = styled.div`
    font-weight: bold;
    padding: 12px 15px;
    cursor: pointer;
`

export const EndDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    user-select: none;
`
