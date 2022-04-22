import styled from 'styled-components'
import { CgProfile as profile } from 'react-icons/cg'
import { FiTrash2 as trash } from 'react-icons/fi'
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

    @media screen and (max-width: 768px) {
        height: 100%;
    }

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
    height: 40%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Viewer = styled.section`
    height: 80%;
    width: 95%;
    background: grey;
    border-radius: 20px;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 768px) {
        width: 70%;
        flex-direction: column;
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
        height: 80%;
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

export const DeleteBox = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 20%;
    }
`

export const DeleteButton = styled.button`
    width: 90%;
    height: 40%;
    background: none;
    color: white;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: #f00d05 solid 3px;;

    &:hover {
        background: #f00d05;
        border: #f00d05 solid 3px;
    }

    @media screen and (max-width: 768px) {
        width: 40%;
        height: 90%;
    }
`

export const DeleteIcon = styled(trash)`
    width: 80%;
    height: 80%;
    color: white;
`

export const FormWrapper = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 50%;
    }
`

export const FormsViewer = styled.section`
    color: white;
    font-size: 20px;
    background: grey;
    width: 90%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        width: 70%;
        height: 100%;
    }
`


export const FormsWrapper = styled.div`
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        overflow: auto;
    }
`


export const Text = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`


export const Form = styled.form`
    height: 80%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Input = styled.input`
    width: 80%;
    height: 90%;
    border-radius: 20px;
    border: none;
`


export const Button = styled.button`
    background: #F98200;
    border-radius: 20px;
    color: white;
    border: none;
    height: 60%;
    width: 40%;

    &:hover {
        background: white;
        border: #F98200 solid 3px;
        color: #F98200;
    }

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`

export const Message = styled(Alert)`
    background: #004a04;
    color: #fff;
    border: none;
`

export const Error = styled(Alert)`
    background: #f00d05;
    color: #fff;
    border: none;
`

export const FieldWrapper = styled.div`
    height: 25%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    // border: dashed blue;
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

