import React, {useState} from 'react'
import {
    TestContainer,
    TestNavbar,
    Title,
    ProfileIcon,
    TestBody,
    TextDiv,
    Text,
    SectionWrapper,
    TestSection,
    TSWrapper,
    ImgDiv,
    SecTextDiv,
    SecText,
    LogoutWrapper,
    TestButton,
    ButtonWrapper,
    SOText,
    Wrapper,
    ImgUse,
    ImgPlus,
} 
from './testDashElements'
import { useHistory } from 'react-router-dom'
import {useAuth} from '../../contexts/AuthContext'
import { FiPower } from 'react-icons/fi'


//link to settings page

const Dash = () => {
    const[hover1, setHover1] = useState(false)
    const[hover2, setHover2] = useState(false)
    const[hover3, setHover3] = useState(false)
    const[hover4, setHover4] = useState(false)
    const[hover5, setHover5] = useState(false)
    const[error, setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()

    const onHover1 = () => {
        setHover1(!hover1)
    }
    const onHover2 = () => {
        setHover2(!hover2)
    }
    const onHover3 = () => {
        setHover3(!hover3)
    }
    const onHover4 = () => {
        setHover4(!hover4)
    }
    const onHover5 = () => {
        setHover5(!hover5)
    }

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/home')
        } catch {
            setError('Failed to log out')
        }
    }

   

    return (
        <TestContainer>
            <TestNavbar>
                <Title>Hello There</Title>
            </TestNavbar>
            <TestBody>
                <TextDiv>
                    <Text>What will you do today?</Text>
                </TextDiv>
                <SectionWrapper>
                    <TestSection >
                    {hover1 ?
                        <TSWrapper to='/create' onMouseEnter={onHover1} onMouseLeave={onHover1}>
                            <ImgDiv hover={hover1}>
                                <ImgPlus />
                            </ImgDiv>
                            <SecTextDiv >
                                <SecText>Create</SecText>
                            </SecTextDiv> 
                        </TSWrapper>
                        :
                        <TSWrapper to='/create' onMouseEnter={onHover1} onMouseLeave={onHover1}>
                            <ImgDiv>
                                <ImgPlus />
                            </ImgDiv>
                            
                        </TSWrapper>
                    }
                    </TestSection>
                    <TestSection >
                    {hover2 ?
                        <TSWrapper to='/play' onMouseEnter={onHover2} onMouseLeave={onHover2}>
                            <ImgDiv hover={hover2}>
                                <ImgUse />
                            </ImgDiv>
                            <SecTextDiv >
                                <SecText>Use Your Cards</SecText>
                            </SecTextDiv> 
                        </TSWrapper>
                        :
                        <TSWrapper to='/play' onMouseEnter={onHover2} onMouseLeave={onHover2}>
                            <ImgDiv>
                                <ImgUse />
                            </ImgDiv>
                            
                        </TSWrapper>
                    }
                    </TestSection>
                    <TestSection >
                    {hover3 ?
                        <TSWrapper to='/profile' onMouseEnter={onHover3} onMouseLeave={onHover3}>
                            <ImgDiv hover={hover3}>
                                <ProfileIcon />
                            </ImgDiv>
                            <SecTextDiv >
                                <SecText>View your profile</SecText>
                            </SecTextDiv> 
                        </TSWrapper>
                        :
                        <TSWrapper to='/profile' onMouseEnter={onHover3} onMouseLeave={onHover3}>
                            <ImgDiv>
                                <ProfileIcon />
                            </ImgDiv>
                        </TSWrapper>
                    }
                    </TestSection>
                </SectionWrapper>
                <LogoutWrapper> 
                    <ButtonWrapper>
                        <Wrapper>
                            <TestButton onClick={handleLogout} >
                                <FiPower />
                            </TestButton>
                            <SOText >
                                Leave 
                            </SOText>
                        </Wrapper>
                    </ButtonWrapper>
                </LogoutWrapper>
            </TestBody>
        </TestContainer>
    )
}

export default Dash