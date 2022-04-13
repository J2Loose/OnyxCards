import React from 'react'
import { Link } from 'react-router-dom'
import { GiStack } from 'react-icons/gi'
import { Button } from 'react-bootstrap'

export default function Deck({ deck }) {
    //shows the deck passed to it using this styling. Also links to card creation page
    return (
        <Button to={`/deck/${deck.id}`} variant='outline-primary' className='text-truncate w-100' as={Link}>
            <GiStack className='mr-2' />
            {deck.deckname}
        </Button>
    )
}
