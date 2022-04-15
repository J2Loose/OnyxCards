import React, { useState } from 'react'
import TestAddCard from './TestAddCard'
import { useParams, useHistory } from 'react-router-dom'
import { useDeck } from '../../../hooks/useDeck'
import TestCard from './TestCard'
import Sidebar from '../../Sidebar'
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
    BackButton,
    BackButtonWrapper
} 
from '../testCreateElements'

export default function TestShowCards() {
    const { deckId } = useParams()
    const { deck, childCards } = useDeck(deckId)
    const [searchTerm, setSearchTerm] = useState('')
    const history = useHistory()

    return (
        <TestContainer>
            <TestNavbar>
                <Title>Search and add cards to this deck </Title>
            </TestNavbar>
            <SearchWrapper>
                <BackButtonWrapper>
                    <BackButton onClick={history.goBack}>
                        Go back
                    </BackButton>
                </BackButtonWrapper>
                <Search 
                    type='text'
                    placeholder='Enter card name...'
                    onChange={(event) => {
                        setSearchTerm(event.target.value)

                    }}
                />
            </SearchWrapper>
            <TestBody>
                <DecksWrapper>
                    <DeckDisplay>
                        <Text>Your Cards</Text>
                        <ButtonWrap>
                            <TestAddCard currentDeck={deck}/>
                        </ButtonWrap>
                        {childCards.length > 0 && (
                            <DeckViewer>
                                {childCards.filter((childCard)=> {
                                    if (searchTerm == '') {
                                        return childCard
                                    } else if (childCard.front.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return childCard
                                    }
                                }).map(childCard => (
                                    <DeckBox 
                                        key={childCard.id} 
                                        className='p-2'
                                    >
                                        <TestCard card={childCard} />
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