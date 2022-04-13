import React, {useState} from 'react'
import {
    CardSection,
    ModalWrapper,
    CardModal2,
    CardForm2,
    CardInput,
    CardLabel,
    CardSelect,
    SelectOption
}
from '../Creation/CreateElements'
import { AiOutlinePlus } from 'react-icons/ai'
import { Button, Modal } from 'react-bootstrap'
import { database } from '../../../firebase'

import { useAuth } from '../../../contexts/AuthContext'

export default function AddCard({ currentDeck }) {
    const [ open, setOpen ] = useState(false)
    const [ front, setFront ] = useState('')
    const [ back, setBack ] = useState('')
    const { currentUser } = useAuth()


    //opens and closes modal
    function openModal() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }

    //function that creates card and stores in database
    function handleSubmit(e) {
        e.preventDefault()

        database.cards.add({
            front: front,
            back: back,
            userId: currentUser.uid,
            createdAt: database.getCurrentTimestamp(),
            parentId: currentDeck.id 
        })

        setFront('')
        setBack('')
        setOpen(false)
    }
    
    return (
        <div>
        <CardSection onClick={openModal}>
        <AiOutlinePlus />
        </CardSection>
        {/* Used to create cards */}
            <ModalWrapper>
                <Modal show={open} onHide={handleClose} dismissable='true' style={{ borderRadius: '15px', background: 'transparent'}}>
                    <Modal.Header>
                        <h1>Card Creation Station</h1>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit} show={open}>
                            <div>
                                <label>Front</label>
                                <input type='text' value={front} onChange={e => setFront(e.target.value)} className='form-control' maxLength={40} required/>
                                <label>Back</label>
                                <input type='text' value={back} onChange={e => setBack(e.target.value)} className='form-control' required/>
                            </div>
                            <Modal.Footer>
                                <Button variant='outline-secondary' onClick={handleClose}>Close</Button>
                                <Button variant='outline-primary' type='submit'>Add Deck</Button>
                            </Modal.Footer>
                        </form>
                    </Modal.Body>
                </Modal>
            </ModalWrapper> 
        </div>
    )
}
