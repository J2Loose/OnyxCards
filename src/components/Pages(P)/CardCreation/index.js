import {
    CreateContainer,
    CreateWrap,
    Title,
    CreateCard,
    CardHeader,
    CardBody,
    CreateWrapper,
    Wrapper
}
from '../Creation/CreateElements'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Sidebar from '../../Sidebar'
import AddCard from './AddCard'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDeck } from '../../../hooks/useDeck'
import Card from './Card'

export default function ShowCards() {
    const { deckId } = useParams()
    const { deck, childCards } = useDeck(deckId)

    return (
        <>
            <Sidebar />
            <CreateContainer>
                <CreateWrap>
                    <Title>Add some cards to this deck</Title>    
                </CreateWrap>  
                <CreateWrapper>
                    <CreateCard style={{height: '80vh'}}>
                        <CardBody >
                            <CardHeader>Press the Plus to make a new card<AiOutlineArrowDown /></CardHeader>
                            {/* function that creates cards */}
                            <AddCard currentDeck={deck}/>
                            <div style={{height: '70vh'}}>
                                <Wrapper className="overflow-auto">
                                    {/* maps through the childcards array that was populated in the useDeck hook */}
                                        {childCards.length > 0 && (
                                        <div className='d-flex flex-wrap'>
                                            {childCards.map(childCard => (
                                                <div 
                                                    key={childCard.id} 
                                                    style={{ maxwidth: '250px' }} 
                                                    className='p-2'
                                                >
                                                    <Card card={childCard} />
                                                </div>
                                            ))}

                                        </div>
                                    )}
                                </Wrapper>
                            </div>
                        </CardBody>    
                    </CreateCard> 
                </CreateWrapper>
            </CreateContainer>
        </>
    )

}
