import React from 'react'
import { Link } from 'react-router-dom'
import { GiStack } from 'react-icons/gi'
import { Decks } from './CreateElements'

export default function Deck({ deck }) {
    //shows the deck passed to it using this styling. Also links to card creation page
    return (
        <Decks to={`/deck/${deck.id}`}  as={Link}>
            <GiStack className='mr-2' />
            {deck.deckname}
        </Decks>
    )
}