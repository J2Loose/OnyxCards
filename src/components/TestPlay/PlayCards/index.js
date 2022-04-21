import React from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { useDeck } from '../../../hooks/useDeck'
import FlashcardList from './FlashcardList'
import { DeckDisplay, DeckViewer, TestContainer, TestNavbar, Text, Title, TestBody, DecksWrapper, ButtonWrap, BackButton, BackButtonWrapper, ListWrapper } from '../testPlayElements';


//function to show flashcards and allow user to go back
export default function PlayCards() {
    const { deckId } = useParams()
    const { childCards } = useDeck(deckId)
    const history = useHistory()


    return (
        <TestContainer>
            <TestNavbar>
                <Title>Time to Revise!</Title>
            </TestNavbar>
            <TestBody using={true}>
                <DecksWrapper>
                    <DeckDisplay using={true}>
                        <Text>
                            Use your flashcards
                        </Text>
                            <DeckViewer>
                                {/* Shows the flashcards */}
                                <FlashcardList flashcards={childCards}/>
                            </DeckViewer>
                            {/* Button to allow user to go back to the deck selection page */}
                            <BackButtonWrapper using={true}>
                                <BackButton using={true} onClick={history.goBack}>Done?</BackButton>
                            </BackButtonWrapper>            
                    </DeckDisplay>
                </DecksWrapper>
            </TestBody>
        </TestContainer>
    )
}




    