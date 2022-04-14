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
    align-items: center;
    justify-content: center;
    padding-left: 40px;

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

export const TestBody = styled.div`
    height: 75%;
    display: flex;
    // justify-content: center;
    flex-direction: row;
`

export const SearchWrapper = styled.div`
    width: 100%;
    height: 15%;
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
    ::placeholder,
    ::-webkit-input-placeholder {
      color: black;
    }
    :-ms-input-placeholder {
       color: black;
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
    width: 60%;
    height: 90%;
    background: black;
    border-radius: 40px;
`

export const Text = styled.div`
    color: white;
    font-weight: bold;
    font-size: 40px;
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DeckViewer = styled.div`
    height: 77%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    overflow-wrap: break-word;
    flex-direction: column;
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
`

export const Deck = styled.section`
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
`

export const DeckBox = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
`

// export const List = styled.button`
//     height: 50px;
//     background: #615b58;
//     border-radius: 8px;
//     color: #fff;
//     font-size: 30px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: row;

//     &:hover{
//         background: red;
//         color: white;
        
//     }
// `