import styled from 'styled-components'


export const TestContainer = styled.div`
    background: #202124;
    height: 100vh;

    @media screen and (max-width: 768px) {
        overflow: scroll;
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
    width: 80%;
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
    height: ${({using}) => (using ? '90%' : '70%')};
    display: flex;
    // justify-content: center;
    flex-direction: row;

`

export const SearchWrapper = styled.div`
    width: 100%;
    height: 13%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Search = styled.input`
    background: grey;
    border: none;
    border-radius: 10px;
    width: 50%;
    height: 30%;
    color: white;
    padding-left: 5px;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: white;
    }
    :-ms-input-placeholder {
       color: white;
    }
`

export const DecksWrapper = styled.div`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`
    
export const DeckDisplay = styled.div`
    width: ${({using}) => (using ? '80%' : '60%')};
    height: 90%;
    background: black;
    border-radius: 40px;
    border: dashed green;
`

export const Text = styled.div`
    color: white;
    font-weight: bold;
    font-size: 40px;
    height: 15%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: dashed yellow;

    @media screen and (max-width: 768px) {
        font-size: 100%;
    }
`

export const DeckViewer = styled.div`
    height: 79%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    overflow-wrap: break-word;
    flex-direction: column;
    border: dashed red;
`

export const CreateButton = styled.button`
    width: 30%;
    height: 80%;
    background: grey;
    border-radius: 10px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: 3px 3px orange;
    }
`



export const ButtonWrap = styled.div`
    height: 12%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: dashed white;
`

export const ShowDeck = styled.section`
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: grey;
    color: white;
    font-size: 20px;

    &:hover {
        text-decoration: none;
    }

    @media screen and (max-width: 768px) {
        font-size: 100%;
        overflow: hidden;
        text-overflow: ellipses;
    }
`

export const Card = styled.section`
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: grey;
    color: white;
    font-size: 20px;

    &:hover {
        text-decoration: none;
        background: red;
    }
`

export const DeckBox = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const BackButton = styled.button`
    background: grey;
    height: 30%;
    border: none;
    border-radius: 10px;
    width:  ${({using}) => (using ? '30%' : '100%')};
    color: white;
    font-size: 100%;

    &:hover {
        background: white;
        color: #F98200;
    }

    @media screen and (max-width: 768px) {
        font-size: 100%;
    }
`

export const BackButtonWrapper = styled.div`
    padding-right: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: dashed blue;
    width:  ${({using}) => (using ? '100%' : '10%')};
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
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const ListWrapper = styled.div`
    border: dashed white;
`