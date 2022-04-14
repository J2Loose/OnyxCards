import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CgProfile as profile } from 'react-icons/cg'
import { VscGraphLine } from 'react-icons/vsc'
import { BsPlus } from 'react-icons/bs'
import { FiMonitor  } from 'react-icons/fi'

// background colour hex = #202124
// section colour hex = #292a2d


export const ImgUse = styled(FiMonitor)`
    width: 75%;
    height: 80%;
`
export const ImgPlus = styled(BsPlus)`
    width: 75%;
    height: 80%;
`

export const ImgGraph = styled(VscGraphLine)`
    width: 75%;
    height: 80%;
`



export const TestContainer = styled.div`
    background: #202124;
    height: 100vh;

    @media screen and (max-width: 768px) {
        overflow: scroll;
    }
`

export const TestNavbar = styled.nav`
    background: #F98200;
    height: 12%;
    display: flex;

`

export const Title = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    color: white;
    font-size: 50px;
    padding-left: 10px;
    word-wrap: break-word;
    font-weight: bold;
    // border: dotted white;

    @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`

export const ProfileWrapper = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    font-size: 20px;
    padding-left: 5px;
    // border: dashed white;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const ProfileIcon = styled(profile)`
    width: 60%;
    height: 80%;
`



export const TestBody = styled.div`
    height: 85%;
    // border: dashed red;
`



export const TextDiv = styled.div`
    width: 100%;
    height: 20%;
    // border: dashed white;
    display: flex;
    align-items: center;
    justify-content: center;
`


export const Text = styled.p`
    font-size: 50px;
    color: white;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`


export const SectionWrapper = styled.div`
    height: 75%;
    // border: dashed white;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        height: 75%;
        display: flex;
        flex-wrap: wrap;
    }
`

export const TestSection = styled.div`
    width: 30%;
    height: 65%;
    z-index: 0;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        display: flex; 
        justify-content: space-between;
        height: 75%;
        width: 75%;

    }

    @media screen and (max-height: 600px) {
        height: 75%;
    }
`

export const TSWrapper = styled(Link)`
    width: 100%;
    // border: dashed white;
    border-radius: 40px;
    background: #292a2d;

    &:hover {
        box-shadow: 10px 10px;
        text-decoration: none;
    }
`


export const ImgDiv = styled.div`
    height: ${({hover}) => (hover ? '80%' : '100%')};
    // border: green dashed;
    display: flex;
    align-items: center;
    justify-content: center;
`


export const TestImg = styled.img`
    width: 50%;
    height: ${({hover}) => (hover ? '80%' : '60%')};
`


export const SecTextDiv = styled.div`
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    // border: yellow dashed;

`


export const SecText = styled.p`
    color: white;
    font-size: 20px;
`


export const LogoutWrapper = styled.footer`
    height: 8%;
    width: 100%;
    // border: dashed blue;
    position: relative;
    display: flex;
    

    @media screen and (max-width: 768px) {
        position: relative;
        top: 100%;
    }
`


export const TestButton = styled.button`
    border-radius: 100px;
    background: none;
    border: red 2px solid;
    color: white;
    height: 80%;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    width: 5.5vh;
    

    &:hover {
        background: red;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    height: 100%;
    // border: dashed white;
    width: 50%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const TestSettings = styled(Link)`
    align-self: center;
    width: 5.5vh;
    height: 83%;
    background: none;
    border: white solid 2px;
    border-radius: 100px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: orange;
        background: white;
    }

    @media screen and (max-width: 768px) {
        width: 33px;
        overflow: hidden;
    }
`

export const SOText = styled.div`
    display: flex;
    width: auto;
    align-items: center;
    padding-left: 5px;
    color: white;
    

    @media screen and (max-width: 768px) {
        display: none;
    }
`


export const Wrapper = styled.div`
    // border: dashed green;
    display: flex;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;

    @media screen and (max-width: 768px) {
        width: auto;
    }
`