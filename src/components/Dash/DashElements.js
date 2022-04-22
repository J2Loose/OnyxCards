import styled from 'styled-components'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const DashboardContainer = styled.div`
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
export const DashboardWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`

export const Title = styled.h1`
    margin-top: 25px;
    margin-bottom: 20px;
    color: #fff;
    font-size: 35px;
    font-weight: 400;
    text-align: center;
`

export const DashboardBody = styled.div`
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DashboardCard = styled(Card)`
    background: #333130;
    height: 90%;
    width: 80%;
    padding: 50px 130px;
    align-items: center;
    border-radius: 15px;
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

export const CardSection = styled.section`
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SectionWrapper = styled(Link)`
    background: #615b58;
    border-radius: 11px;
    height: 80px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    &:hover {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
        color: #F98200;
    }
`

export const CardImg = styled.div`
    display: flex;
    align-items: flex-start;
    font-size: 20px;

`

export const CardTitle = styled.p`
    font-weight: bold;
    font-size: 30px;
    color: #fff;
    justify-self: center;

`