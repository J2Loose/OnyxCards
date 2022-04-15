import React from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { useDeck } from '../../../hooks/useDeck'
import FlashcardList from './FlashcardList'
import { DeckDisplay, DeckViewer, TestContainer, TestNavbar, Text, Title, TestBody, DecksWrapper, ButtonWrap, BackButton, BackButtonWrapper } from '../testPlayElements';

export default function TestPlayCards() {
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


        // <div>
        //     <Sidebar />
        //     <UseContainer>
        //         <UseWrap>
        //             <Title>Time to Revise!</Title>
        //         </UseWrap>    
        //         <UseWrapper>
        //             <UseCard>
        //                 <CardBody>
        //                     <CardHeader>Use your Flashcards</CardHeader>
        //                     <CardSection2>
        //                         <FlashcardList flashcards={childCards} />
        //                     </CardSection2>
        //                 </CardBody>
        //             </UseCard>
        //         </UseWrapper>
        //     </UseContainer> 
        // </div>

    