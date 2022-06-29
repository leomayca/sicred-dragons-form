import styled from 'styled-components'

export const ButtonDefault = styled.button`
    font-weight: bold;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: white;
    justify-content: center;
    border-radius: 5px;
    border: solid 1.4px ${({ color }) => (color === '2' ? 'grey' : '#a9332e')};
    background: ${({ color }) => (color === '2' ? 'grey' : '#a9332e')};
    width: 100%;
    line-height: 20px;
    letter-spacing: 1px;
    outline: none;
    user-select: none;
    padding: 5px 12px;
    font-size: 17px;
`
