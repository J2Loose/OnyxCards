import React, {useState} from 'react'
import { database } from '../../firebase'
import { useAuth } from '../../contexts/AuthContext'
import { Button, Modal, Alert } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { CreateButton } from './CreateElements'

//function to create a new deck. Takes in the current deck you are within which should be the root deck
export default function AddDeck({ currentDeck }) {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const { currentUser } = useAuth()
    const [ success, setSuccess ] = useState('')
    const delayInMilli = 1000;

    //function to open modal that creates user's deck
    function openModal() {
        setOpen(true)
    }

    const handleClose = () => setOpen(false);

    // function to create deck and store in database
    function handleSubmit(e) {
        e.preventDefault()

        //makes sure you aren't already within a deck
        if (currentDeck == null) return

        //adds inputted data to the database with these fields
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
          <CreateButton onClick={openModal}>
              <AiOutlinePlus />
            </CreateButton>
                    {/* Modal containing form to create a deck */}
                    <Modal show={open} centered dismissable='true'>
                            <Modal.Header >
                                <h1>Create a Deck</h1>
                            </Modal.Header>
                            <Modal.Body>
                                <form onSubmit={handleSubmit}>
                                    {/* Name of deck */}
                                    <label>Deck Name</label>
                                    <input type='text' value={name} onChange={e => setName(e.target.value)} required className='form-control'/>
                                    {/* Subject of deck */}
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
                                    <hr />                            
                                        <Button variant='outline-primary' type='submit'>Add Deck</Button>
                                        <Button variant='outline-secondary' onClick={handleClose}>Close</Button>
                                </form>
                                <hr />
                                {/* Message to show that deck has successfully been created */}
                                {success && <Alert variant="success">{success}</Alert>}
                            </Modal.Body>
                    </Modal>

        </>
    )
}
