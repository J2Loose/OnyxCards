import React from 'react'
import {
    UseContainer,  
    UseWrap,
    UseWrapper,
    UseCard,
    CardBody,
    CardHeader,
    CardSection,
    Title
}
from './UseElements'
import { useDeck } from '../../../hooks/useDeck'
import { useParams } from 'react-router-dom'
import PlayDeck from './playDeck'

export default function Usation() {
    const { deckId } = useParams()
    const { childDecks } = useDeck(deckId)
    console.log(childDecks)


    return (
        <>
            <UseContainer>
                <UseWrap>
                    <Title>Time to Revise!</Title>
                </UseWrap>    
                <UseWrapper>
                    <UseCard>
                        <CardBody>
                            <CardHeader>Select a deck to start using</CardHeader>
                            <CardSection>
                            {/* maps through the childDecks array */}
                            {childDecks.length > 0 && (
                                <div className='d-flex flex-wrap'>
                                    {childDecks.map(childDeck => (
                                        <div 
                                            key={childDeck.id} 
                                            style={{ maxwidth: '250px' }} 
                                            className='p-2'                
                                        >
                                            <PlayDeck deck={childDeck} />
                                        </div>
                                    ))}

                                </div>
                            )}     
                            </CardSection>
                        </CardBody>
                    </UseCard>
                </UseWrapper>
            </UseContainer>  
        </>
    )
}
