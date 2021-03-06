import styled from 'styled-components'

import { backgroundDragon } from '../../../common/images'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    background-color: #121118;
    width: 100vw;
    height: 100vh;
    grid-template-areas: 'form image';
    overflow: hidden;

    @media (max-width: 800px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const ImageContainer = styled.div`
    background-color: #000;
    background-image: url(${backgroundDragon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    grid-area: image;
    overflow: hidden;

    @media (max-width: 800px) {
        display: flex;
        height: 100%;
    }
`

export const FormContainer = styled.div`
    background-color: #111;
    width: 100%;
    grid-area: form;
    overflow: hidden;
    border-radius: 0 20px 20px 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px;
    border-right: solid 2px #3c1d20;

    @media (max-width: 800px) {
        width: 270px;
        height: 270px;
        position: absolute;
        border-radius: 20px;
        background-color: rgba(17, 17, 17, 0.85);
    }

    h1 {
        color: white;
        font-size: 1.5em;

        @media (max-width: 800px) {
            font-size: 1.3em;
        }
    }
`
