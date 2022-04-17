import React, { useState } from 'react'
import {
    TestContainer,
    TestNavbar,
    TestBody,
    Title,
    SearchWrapper,
    Search,
    DecksWrapper,
    DeckDisplay,
    Text,
    DeckViewer,
    ButtonWrap,
    DeckBox,
    LinksWrapper,
    HyperLink,
    Option,
    OptionText
} 
from './testCreateElements'
import TestAddDeck from './TestAddDeck'
import { useDeck } from '../../hooks/useDeck'
import { useParams, Link, useHistory } from 'react-router-dom'
import TestDeck from './TestDeck'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { FiMonitor, FiLogOut } from 'react-icons/fi'
import { useAuth } from '../../contexts/AuthContext'



const Create = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('')
    const { deckId } = useParams()
    const { deck, childDecks } = useDeck(deckId)
    const history = useHistory()
    const { logout } = useAuth()

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
                <Title>Create and Search through your decks</Title>
            </TestNavbar>
            <SearchWrapper>
                <Search 
                    type='text' 
                    placeholder='Enter deck name...'
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}  
                />
            </SearchWrapper>
            <TestBody>
                <DecksWrapper>
                    <DeckDisplay>
                        <Text>Your Decks</Text>
                        <ButtonWrap>
                            <TestAddDeck currentDeck={deck}/>
                        </ButtonWrap>
                        {childDecks.length > 0 && (
                            <DeckViewer>
                                {childDecks.filter((childDeck)=> {
                                    if (searchTerm == '') {
                                        return childDeck
                                    } else if (childDeck.deckname.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return childDeck
                                    }
                                }).map(childDeck => (
                                    <DeckBox 
                                        key={childDeck.id} 
                                        className='p-2'
                                    >
                                        <TestDeck deck={childDeck}/>
                                    </DeckBox>
                                ))}
                            </DeckViewer>
                        )}
                    </DeckDisplay>
                </DecksWrapper>
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
                    <Option to='/play' as={Link}>
                        <FiMonitor />
                    </Option>
                    <OptionText>
                        Play
                    </OptionText>
                </HyperLink>
                <HyperLink>
                    <Option to='/profile' as={Link}>
                        <AiOutlineUser />
                    </Option>
                    <OptionText>
                        Profile
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
    )
}



export default Create