import React, {useState} from 'react'
import { database } from '../../../firebase'
import { 
    CardSection
}
from './CreateElements'
import { useAuth } from '../../../contexts/AuthContext'
import { Button, Modal, Alert } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'


export default function AddDeck({ currentDeck }) {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const { currentUser } = useAuth()
    const [ success, setSuccess ] = useState('')
    const delayInMilli = 1000;


    function openModal() {
        setOpen(true)
    }

    function closeModal() {
        setOpen(false)
        setName('')
        setSubject('')
    }

    const handleClose = () => setOpen(false);

    // function to create deck and store in database
    function handleSubmit(e) {
        e.preventDefault()

        if (currentDeck == null) return

        database.decks.add({
            deckname: name,
            decksubject: subject,
            userId: currentUser.uid,
            createdAt: database.getCurrentTimestamp(), 
            parentId: currentDeck.id,


          })
        

        setName('')
        setSubject('')
        setSuccess('Successfully created new deck')
        setTimeout(function() {
            setOpen(false)
            setSuccess('')
        }, delayInMilli)

    }
    return (
        <>
          <CardSection onClick={openModal}>
              <AiOutlinePlus />
                    {/* Form to create a deck */}
                    <Modal show={open} backdrop='static' onHide={closeModal} centered >
                            <Modal.Header>
                                <h1>Create a Deck</h1>
                            </Modal.Header>
                            <Modal.Body>
                                <form onSubmit={handleSubmit}>
                                    <label>Deck Name</label>
                                    <input type='text' value={name} onChange={e => setName(e.target.value)} required className='form-control'/>
                                    <label>Subject</label>
                                    <select value={subject}  onChange={e => setSubject(e.target.value)} required className='form-control'>
                                        <option> - - -</option>
                                        <option>Maths</option>
                                        <option>English</option>
                                        <option>Biology</option>
                                        <option>Chemistry</option>
                                        <option>Physics</option>
                                        <option>IT & Computing</option>
                                        <option>Business</option>
                                        <option>Economics</option>
                                        <option>History</option>
                                        <option>Geography</option>
                                        <option>Sociology</option>
                                        <option>Psychology</option>
                                        <option>Religious Studies</option>
                                        <option>Drama</option>
                                        <option>Art</option>
                                        <option>Music</option>
                                        <option>Languages</option>
                                        <option>Physical Education</option>
                                    </select>
                                    <Modal.Footer>                            
                                        <Button variant='outline-primary' type='submit'>Add Deck</Button>
                                        <small>Press ESC to close</small>
                                    </Modal.Footer>
                                </form>
                                {success && <Alert variant="success">{success}</Alert>}
                            </Modal.Body>
                    </Modal>
            </CardSection>

        </>
    )
}
