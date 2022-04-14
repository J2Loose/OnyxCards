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
    height: 90%;
    border: dashed red;
    display: flex;
    justify-content: center;
`

export const SearchWrapper = styled.div`
    width: 100%;
    height: 15%;
    border: dashed white;
`