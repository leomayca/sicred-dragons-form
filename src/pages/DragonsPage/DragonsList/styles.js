import styled from 'styled-components'

import { backgroundDragon } from '../../../common/images'

export const ImageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${backgroundDragon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    background-color: #121118;
    position: fixed;
`
export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding-top: 65px;
    justify-content: center;
    padding-bottom: 50px;
    position: relative;
`

export const Content = styled.div`
    padding: 20px;
    border-radius: 20px;
    background-color: #222;
    width: 60%;
    height: 100%;
    display: flex;
    color: white;
    border: solid 2px #111;
    flex-direction: column;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    width: 100%;
    height: 35px;
`
