import React from 'react'
import { Link } from 'react-router-dom'
import { GiStack } from 'react-icons/gi'
import { Button } from 'react-bootstrap'
import { Deck } from '../TestCreate/testCreateElements'

export default function TestDeck({ deck }) {
    //shows the deck passed to it using this styling. Also links to card creation page
    return (
        <Deck to={`/deck/${deck.id}`}  as={Link}>
            <GiStack className='mr-2' />
            {deck.deckname}
        </Deck>
    )
}