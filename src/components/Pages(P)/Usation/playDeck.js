import React from 'react'
import { Link } from 'react-router-dom'
import { GiStack } from 'react-icons/gi'
import { Button } from 'react-bootstrap'

export default function PlayDeck({ deck }) {
    return (
        // shows deck from array with styling. Also links to the flashcard
        <Button to={`/use/${deck.id}`} variant='outline-primary' className='text-truncate w-100' as={Link}>
            <GiStack className='mr-2' />
            {deck.deckname}
        </Button>
    )
}