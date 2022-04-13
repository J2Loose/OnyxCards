import React, {useState} from 'react';
import {
    UseContainer,
    UseWrap,
    UseWrapper,
    UseCard,
    CardBody,
    CardHeader,
    CardSection2,
    Title
}
from '../Usation/UseElements'
import { useParams } from 'react-router-dom'
import { useDeck } from '../../../hooks/useDeck'
import Sidebar from '../../Sidebar'
import FlashcardList from './FlashcardList'

export default function PlayCards() {
    const { deckId } = useParams()
    const { childCards } = useDeck(deckId)



    //calls flashcard list with the childCards array
    return (
        <div>
            <Sidebar />
            <UseContainer>
                <UseWrap>
                    <Title>Time to Revise!</Title>
                </UseWrap>    
                <UseWrapper>
                    <UseCard>
                        <CardBody>
                            <CardHeader>Use your Flashcards</CardHeader>
                            <CardSection2>
                                <FlashcardList flashcards={childCards} />
                            </CardSection2>
                        </CardBody>
                    </UseCard>
                </UseWrapper>
            </UseContainer> 
        </div>
    )
}


    