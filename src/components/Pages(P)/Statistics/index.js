import React from 'react'
import {
    ShareContainer,
    ShareWrap,
    Title,
    ShareWrapper,
    ShareCard,
    CardBody,
    CardHeader,
    CardSection
}
from './StatsElements'
import { Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useDeck } from '../../../hooks/useDeck'


export default function Statistics() {
    const { deckId } = useParams()
    const { deck, childDecks } = useDeck(deckId)

    
    return (
        <>
            <ShareContainer>
                <ShareWrap>
                    <Title>Check your stats!</Title>
                </ShareWrap>    
                <ShareWrapper>
                    <ShareCard>
                        <CardBody>
                            <CardHeader>Here's how you are doing</CardHeader>
                            <CardSection>
                                <div style={{height: '100%'}}> 
                                <Table style={{fontSize: '30px', color: 'white', height: '100%'}} bordered hover striped>
                                        <thead>
                                            <th>#</th>
                                            <th>Deck Name</th>
                                            <th>How many times?</th>
                                        </thead>
                                        <tbody>
                                        {childDecks.length > 0 && (
                                            <div className='d-flex flex-wrap'>
                                                {childDecks.map(childDeck => (
                                                    <div 
                                                        key={childDeck.id} 
                                                        className='p-2'
                                                    >
                                                        <tr>
                                                            <td>1</td>
                                                            <td>{childDeck.deckname}</td>
                                                            <td>4</td>
                                                        </tr>
                                                    </div>
                                                ))}

                                            </div>
                                        )}
                                        </tbody>
                                 </Table>
                                </div>
                            </CardSection>
                        </CardBody>
                    </ShareCard>
                </ShareWrapper>
            </ShareContainer>  
        </>
    )
}
