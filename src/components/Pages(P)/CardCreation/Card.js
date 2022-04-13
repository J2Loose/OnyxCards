import React, { useState } from 'react'
import { GiCardRandom } from 'react-icons/gi'
import { List } from '../Creation/CreateElements'
import { database } from '../../../firebase'
import { Modal, Button } from 'react-bootstrap'


//function to show and delete individual cards
export default function Card({ card }) {
    const [ show, setShow ] = useState(false)
    var cardRef = database.cards.doc(card.id);

    //opens modal
    function handleClick() {
        setShow(true)
    }

    //deletes selected card
    function handleDelete() {
        cardRef.delete()
    }

    //closes modal
    function handleCancel() {
        setShow(false)
    }

    return (
        <div>
            {/* shows each card in the array with this styling */}
            <List className='text-truncate' style={{width: '725px'}} onClick={handleClick}>
                <GiCardRandom className='mr-2' />
                {card.front}
            </List>
            {/* modal to confirm deletion */}
            <Modal show={show} centered>
                <Modal.Header>Confirm Delete</Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete this card?</p>
                    <p>Front: {card.front}</p>
                    <p>Back: {card.back}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal> 
        </div>
    )
}
