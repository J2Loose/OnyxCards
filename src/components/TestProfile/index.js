import React, { useState, useRef } from 'react'
import { 
    TestContainer,
    TestNavbar,
    Title,
    TestBody,
    ProfileWrapper,
    Viewer,
    Image,
    Email,
    Avatar,
    LinksWrapper,
    HyperLink,
    Option,
    StatsViewer,
    StatsWrapper,
    OptionText
} 
from './testProfileElements'
import { Link, useHistory, useParams } from 'react-router-dom'
import { AiOutlineHome, AiOutlinePlus } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { useAuth } from '../../contexts/AuthContext'
import { useDeck } from '../../hooks/useDeck'





export default function Profile() {
    const [error, setError] = useState('')
    const { logout, currentUser } = useAuth()
    const history = useHistory()
    const { deckId } = useParams()
    const { deck, childDecks } = useDeck(deckId)
    


    
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
    <>
        <TestContainer>
            <TestNavbar>
                <Title>Your Profile</Title>
            </TestNavbar>
            <TestBody>
                <ProfileWrapper>
                    <Viewer>
                        <Image>
                            <Avatar />
                        </Image>
                        <Email>
                            {currentUser.email}
                        </Email>
                    </Viewer>
                </ProfileWrapper>
                <StatsWrapper>
                    <StatsViewer>
                        You currently have {childDecks.length} decks.
                    </StatsViewer>
                </StatsWrapper>
            </TestBody>
            <LinksWrapper>
                <HyperLink>
                    <Option to='/dashboard' as={Link}>
                        <AiOutlineHome />
                    </Option>
                    <OptionText>
                        Home
                    </OptionText>
                </HyperLink>
                <HyperLink>
                    <Option to='/create' as={Link}>
                        <AiOutlinePlus />
                    </Option>
                    <OptionText>
                        Create
                    </OptionText>
                </HyperLink>
                <HyperLink>
                    <Option to='/play' as={Link}>
                        <AiOutlinePlus />
                    </Option>
                    <OptionText>
                        Play
                    </OptionText>
                </HyperLink>
                <HyperLink>
                    <Option onClick={handleLogout}>
                        <FiLogOut />
                    </Option>
                    <OptionText>
                        Logout
                    </OptionText>
                </HyperLink>
            </LinksWrapper>
        </TestContainer>
    </>
  )
}
