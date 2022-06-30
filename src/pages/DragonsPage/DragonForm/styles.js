import styled from 'styled-components'

import { redDragon } from '../../../common/images'

export const Title = styled.div`
    font-weight: bold;
    font-size: 25px;
    display: flex;
    justify-content: center;
`

export const GridTemplate = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 20px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`

export const GridContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
`

export const Image = styled.div`
    background-image: url(${redDragon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 290px;
    width: 370px;
    margin-right: 50px;

    @media (max-width: 1280px) {
        height: 230px;
        width: 290px;
    }

    @media (max-width: 1024px) {
        height: 160px;
        width: 200px;
    }

    @media (max-width: 600px) {
        height: 110px;
        width: 140px;
    }
`
