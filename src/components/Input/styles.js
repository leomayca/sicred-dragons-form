import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom: 1rem;
    width: 100%;
`

export const Label = styled.label`
    ::after {
        content: ${({ required }) => (required ? '"*"' : null)};
        color: red;
    }
`

export const InputDefault = styled.input`
    background: #222;
    border: solid 1px rgba(230, 230, 230, 0.5);
    border-radius: 5px;
    outline: none;
    transition: 0.3s;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    margin-top: ${({ label }) => (label === undefined ? null : '5px')};
    padding: 8px;
    font-size: 13px;
    min-height: 35px;
    color: #ffffff;

    ::placeholder {
        transition: 0.3s;
        color: rgba(150, 150, 150, 1);
    }

    :focus {
        border-color: rgba(230, 230, 230, 1);
        ::placeholder {
            color: rgba(150, 150, 150, 0.3);
        }
    }

    :disabled {
        background: #eeeeee;
    }
`
