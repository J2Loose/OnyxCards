import React from 'react'
import {
    CreateContainer,
    CreateWrap,
    Title,
    CreateCard,
    CardHeader,
    CardBody,
    CreateWrapper,
}
from './CreateElements'
import { AiOutlineArrowDown } from 'react-icons/ai'
import AddDeck from './AddDeck'
import { useDeck } from '../../../hooks/useDeck'
import Deck from './Deck'
import { useParams } from 'react-router-dom'


export default function CreateDeck() {
    const { deckId } = useParams()
    const { deck, childDecks } = useDeck(deckId)
    console.log(childDecks)
 


    return (
        <>
          <CreateContainer>
            <CreateWrap>
                <Title>Create a new deck</Title>    
            </CreateWrap>  
            <CreateWrapper className='flex-column'>
                <CreateCard>
                    <CardBody>
                        <CardHeader>Press the Plus to make a new deck <AiOutlineArrowDown /></CardHeader>
                        <AddDeck currentDeck={deck} />
                        {/* maps through each deck in the array and outputs */}
                        {childDecks.length > 0 && (
                                <div className='d-flex flex-wrap'>
                                    {childDecks.map(childDeck => (
                                        <div 
                                            key={childDeck.id} 
                                            style={{ maxwidth: '250px' }} 
                                            className='p-2'
                                        >
                                            <Deck deck={childDeck} />
                                        </div>
                                    ))}

                                </div>
                            )}
                    </CardBody>
                </CreateCard>
            </CreateWrapper>
          </CreateContainer>  
        </>
    )
}

