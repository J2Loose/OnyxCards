import styled from 'styled-components'
import { Card } from 'react-bootstrap'


export const ShareContainer = styled.div`
    min-height: 100vh;
    postition: relative;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #010101;
`
export const ShareWrap = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`

export const Title = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 35px;
    font-weight: 400;
    text-align: center;
`

export const ShareCard = styled(Card)`
    background: #333130;
    height: 600px;
    width: 1000px;
    padding: 50px 130px;
    display: flex;
    align-items: center;
    border-radius: 15px;

`

export const ShareWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CardHeader = styled(Card.Header)`
    color: #fff;
    font-size: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    font-weight: bold;
    padding: 10px;
    margin-top: 0px; 
`

export const CardBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const CardSection = styled.div`
    width: 100%;
    height: 450px;
    background: #615b58;
    border-radius: 8px;
    color: #fff;
    font-size: 170px;
    display: flex;
    align-items: center;
    justify-content: center;

`