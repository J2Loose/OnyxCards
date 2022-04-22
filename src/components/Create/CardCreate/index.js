import React, { useState } from 'react'
import AddCard from './AddCard'
import { useParams, useHistory } from 'react-router-dom'
import { useDeck } from '../../../hooks/useDeck'
import Card from './Card'
import {
    TestContainer,
    TestNavbar,
    TestBody2,
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
from '../CreateElements'

export default function ShowCards() {
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
                    {/* Back Button */}
                    <BackButton onClick={history.goBack}>
                        Go back
                    </BackButton>
                </BackButtonWrapper>
                {/* Live Search */}
                <Search 
                    type='text'
                    placeholder='Enter card name...'
                    onChange={(event) => {
                        setSearchTerm(event.target.value)

                    }}
                />
            </SearchWrapper>
            <TestBody2>
                <DecksWrapper>
                    <DeckDisplay>
                        <Text>Your Cards</Text>
                        <ButtonWrap>
                            {/* Function to add card to deck */}
                            <AddCard currentDeck={deck}/>
                        </ButtonWrap>
                        {/* maps through the cards in the given deck */}
                        {childCards.length > 0 && (
                            <DeckViewer>
                                {/* Filter used for the search */}
                                {childCards.filter((childCard)=> {
                                    //shows all cards if search bar is empty
                                    if (searchTerm == '') {
                                        return childCard
                                    //converts search term and deck names to lowercase for easier searching
                                    } else if (childCard.front.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return childCard
                                    }
                                }).map(childCard => (
                                    <DeckBox 
                                        key={childCard.id} 
                                        className='p-2'
                                    >
                                        <Card card={childCard} />
                                    </DeckBox>
                                ))}

                            </DeckViewer>
                        )}
                    </DeckDisplay>
                </DecksWrapper>
            </TestBody2>
        </TestContainer>
    )
}