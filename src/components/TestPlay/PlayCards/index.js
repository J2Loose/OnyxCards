import React from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { useDeck } from '../../../hooks/useDeck'
import FlashcardList from './FlashcardList'
import { DeckDisplay, DeckViewer, TestContainer, TestNavbar, Text, Title, TestBody, DecksWrapper, ButtonWrap, BackButton, BackButtonWrapper } from '../testPlayElements';

export default function PlayCards() {
    const { deckId } = useParams()
    const { childCards } = useDeck(deckId)
    const history = useHistory()

    //calls flashcard list with the childCards array
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
                                <FlashcardList flashcards={childCards}/>
                                    <BackButtonWrapper using={true}>
                                        <BackButton using={true} onClick={history.goBack}>Done?</BackButton>
                                    </BackButtonWrapper>            
                            </DeckViewer>
                    </DeckDisplay>
                </DecksWrapper>
            </TestBody>
        </TestContainer>
    )
}




    