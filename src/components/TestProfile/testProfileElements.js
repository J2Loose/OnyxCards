import styled from 'styled-components'
import { CgProfile as profile } from 'react-icons/cg'
import { Alert } from 'react-bootstrap'


export const TestContainer = styled.div`
    background: #202124;
    height: 100vh;

    @media screen and (max-width: 768px) {
        overflow: scroll;
    }
`

export const Avatar = styled(profile)`
    width: 80%;
    height: 80%;
`

export const TestNavbar = styled.nav`
    background: #F98200;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 50px;
    padding-left: 10px;
    word-wrap: break-word;
    font-weight: bold;
    // border: dotted white;

    @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: center;
        font-size: 100%;
        
    }
`

export const TestBody = styled.div`
    height: 83%;
    display: flex;
    // justify-content: center;
    flex-direction: column;
`

export const ProfileWrapper = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Viewer = styled.section`
    height: 80%;
    width: 90%;
    background: grey;
    border-radius: 20px;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 768px) {
        width: 70%;
    }
`
export const Image = styled.div`
    height: 100%;
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`
export const Email = styled.div`
    height: 100%;
    width: 75%;
    display: flex;
    align-items: center;
    font-size: 50px;
    color: white;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const StatsViewer = styled.section`
    color: white;
    font-size: 20px;
    background: grey;
    width: 90%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;

    @media screen and (max-width: 768px) {
        width: 70%;
    }
`


export const StatsWrapper = styled.div`
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`



export const LinksWrapper = styled.div`
    height: 7%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid #F98200 3px;
    border-radius: 10px;
`

export const HyperLink = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
`
export const Option = styled.button`
    background: #F98200;
    color: white;
    border-radius: 30px;
    border: #F98200 solid;
    width: 40%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: white;
        color: #F98200;
    }

    @media screen and (max-width: 768px) {
        width: 90%;
    }
    
`

export const OptionText = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

