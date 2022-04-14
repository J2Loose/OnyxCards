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
    DeckBox
} 
from './testCreateElements'
import TestAddDeck from './TestAddDeck'
import { useDeck } from '../../hooks/useDeck'
import { useParams } from 'react-router-dom'
import Sidebar from '../Sidebar'
import TestDeck from './TestDeck'

const TestCreate = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { deckId } = useParams()
    const { deck, childDecks } = useDeck(deckId)

    return (
        <TestContainer>
            <Sidebar />
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
                                    } else  if (childDeck.deckname.toLowerCase().includes(searchTerm.toLowerCase())) {
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
        </TestContainer>
    )
}



export default TestCreate