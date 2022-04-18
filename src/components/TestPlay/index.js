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
    DeckBox,
    LinksWrapper,
    HyperLink,
    Option,
    OptionText
} 
from './testPlayElements'
import { useDeck } from '../../hooks/useDeck'
import { useParams, Link, useHistory } from 'react-router-dom'
import Deck from './Deck'
import { AiOutlineHome, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { useAuth } from '../../contexts/AuthContext'



const Play = () => {
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
                <Title>Use your decks</Title>
            </TestNavbar>
            <SearchWrapper>
                {/* Live search */}
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
                        {/* maps through the user's decks */}
                        {childDecks.length > 0 && (
                            <DeckViewer>
                                {/* Filter used for the search */}
                                {childDecks.filter((childDeck)=> {
                                    //shows all decks if search bar is empty
                                    if (searchTerm == '') {
                                        return childDeck
                                        // converts search term and deck names to lowercase for easier searching
                                    } else  if (childDeck.deckname.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return childDeck
                                    }
                                }).map(childDeck => (
                                    <DeckBox 
                                        key={childDeck.id} 
                                        className='p-2'
                                    >
                                        <Deck deck={childDeck}/>
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
                    <Option to='/create' as={Link}>
                        <AiOutlinePlus />
                    </Option>
                    <OptionText>
                        Create
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



export default Play