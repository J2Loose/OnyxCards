import styled from 'styled-components'
import { Card, Modal } from 'react-bootstrap'

export const CreateContainer = styled.div`
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
export const CreateWrap = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`

export const Title = styled.h1`
    margin-bottom: 20px;
    margin-top: 20px;
    color: #fff;
    font-size: 35px;
    font-weight: 400;
    text-align: center;
`

export const CreateCard = styled(Card)`
    background: #333130;
    height: 80%;
    width: 1000px;
    padding: 50px 130px;
    display: flex;
    align-items: center;
    border-radius: 15px;

`

export const CreateWrapper = styled.div`
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

export const CardSection = styled.button`
    width: 100%;
    height: 50px;
    background: #615b58;
    border-radius: 8px;
    color: #fff;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    &:hover {
        color: #F98200;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
    }


`

export const CardModal = styled(Modal)`
    background: transparent;
    width: 100%;
    height: 500px;
    justify-content: space-between;
    
`

export const CardForm = styled.form`
    background: #010101;
    border: orange;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    padding-top: 10px;
`

export const CardLabel = styled.label`
    color: #f98200;
    font-weight: bold;
    font-size: 20px;
`

export const CardInput = styled.input`
    background: #000;
    border: solid #f98200 2px;
    border-radius: 8px;
    height: 50px;
    width: 400px;
    color: #f98200;

    &.active {
        background: #000;
        border: solid #f98200 2px;
    }


`

export const ModalWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const CardSelect = styled.select`
    background: #000;
    border: solid #f98200 2px;
    border-radius: 8px;
    height: 50px;
    width: 400px;
    color: #f98200;


`

export const SelectOption = styled.option`
    background: #000;
    color: #fff;
    height: 50px;

    &:hover {
        background: #f98200;
    }
`

export const ButtonWrapper = styled(Modal.Footer)`
    width: 100%;
    display: flex;
    justify-content: center;
    background: #010101;
    height: 100%;

`

export const CardModal2 = styled(Modal)`
    width: 100%;
    height: 80%;
    background: #f98200;
`

export const CardForm2 = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
    padding-top: 10px;
    padding-bottom: 10px;
    height: 100%;
    border-radius: 25px !important;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 70%;
`

export const List = styled.button`
    height: 50px;
    background: #615b58;
    border-radius: 8px;
    color: #fff;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    &:hover{
        background: red;
        color: white;
        
    }
`
