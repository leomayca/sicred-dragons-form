import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom: 1rem;
`

export const Label = styled.label`
    ::after {
        content: ${({ required }) => (required ? '"*"' : null)};
        color: red;
    }
`

export const InputDefault = styled.input`
    background: white;
    border: solid 1px ${({ error }) => (error ? 'red' : '#b0bac9')};
    border-radius: ${({ password }) => (password ? '5px 0px 0px 5px' : '5px')};
    outline: none;
    transition: 0.3s;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    margin-top: ${({ label }) => (label === undefined ? null : '5px')};
    padding: 8px;
    font-size: 13px;
    min-height: 35px;

    ::placeholder {
        transition: 0.3s;
        color: rgba(200, 200, 200, 1);
    }

    :focus {
        border-color: rgba(150, 150, 150, 0.8);
        ::placeholder {
            color: rgba(200, 200, 200, 0.5);
        }
    }

    :disabled {
        background: #eeeeee;
    }
`
