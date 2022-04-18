import React, { useState, useRef } from 'react'
import { 
    TestContainer,
    TestNavbar,
    Title,
    TestBody,
    ProfileWrapper,
    Viewer,
    Image,
    Email,
    Avatar,
    LinksWrapper,
    HyperLink,
    Option,
    FormsViewer,
    FormsWrapper,
    Text,
    Input,
    Button,
    Form,
    OptionText,
    Message,
    Error,
    FieldWrapper,
    FormWrapper,
    DeleteBox,
    DeleteButton,
    DeleteIcon
} 
from './testProfileElements'
import { Link, useHistory, useParams } from 'react-router-dom'
import { AiOutlineHome, AiOutlinePlus } from 'react-icons/ai'
import { FiLogOut, FiMonitor, FiTrash2 } from 'react-icons/fi'
import { useAuth } from '../../contexts/AuthContext'
import { useDeck } from '../../hooks/useDeck'
import { Modal } from 'react-bootstrap'
import { EmailAuthProvider, reauthenticateWithCredential, updateEmail, updatePassword, deleteUser } from 'firebase/auth'





export default function Profile() {
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const { logout, currentUser } = useAuth()
    const history = useHistory()
    const { deckId } = useParams()
    const { deck, childDecks } = useDeck(deckId)
    const newEmailRef = useRef()
    const newConfirmEmailRef = useRef()
    const newPasswordRef = useRef()
    const newConfirmPasswordRef = useRef()
    const currentPasswordRef = useRef()
    const currentPassword2Ref = useRef()
    const currentPassword3Ref = useRef()
    const delayInMilli = 2000;
    const minimumLength = 6;
    



    function handleClose(e) {
        e.preventDefault()
        setOpen2(false)
    }

    function handleDelete() {
        setOpen2(true)
    }

    
    async function EmailReAuth(e) {
        e.preventDefault()
        setOpen(true)


        const credential = EmailAuthProvider.credential(currentUser.email, currentPasswordRef.current.value);
        reauthenticateWithCredential(currentUser, credential).then(() => {
            if (newEmailRef.current.value !== newConfirmEmailRef.current.value) {
                    return (
                        setError('Emails do not match'),
                        setTimeout(function() {
                            setOpen(false)
                            setError('')
                            currentPasswordRef.current.value='';
                        }, delayInMilli) 
                    )   
                }
    
            if (newEmailRef.current.value == currentUser.email) {
                    return (
                        setError('This is your current email address'),
                        setTimeout(function() {
                            setOpen(false)
                            setError('')
                            currentPasswordRef.current.value='';
                        }, delayInMilli) 
                    ) 
                }

            updateEmail(currentUser, newEmailRef.current.value).then(() => {
                setMessage('Email Successfully Changed')
                setTimeout(function() {
                    setOpen(false)
                    setMessage('')
                    currentPasswordRef.current.value='';
                    newEmailRef.current.value='';
                    newConfirmEmailRef.current.value='';
                }, delayInMilli)
            }).catch(() => {
                setError('Failed to change email')
                setTimeout(function() {
                    setError('')
                    setOpen(false)
                    currentPasswordRef.current.value='';
                }, delayInMilli)
            })
        }).catch(() => {
            setError('Re-Authentication Failed')
            setTimeout(function() {
                setError('')
                setOpen(false)
                currentPasswordRef.current.value='';
            }, delayInMilli)
        })
        setMessage('')
        setError('')
    }


    async function PasswordReAuth(e) {
        e.preventDefault()
        setOpen(true)


        const credential2 = EmailAuthProvider.credential(currentUser.email, currentPassword2Ref.current.value);
        reauthenticateWithCredential(currentUser, credential2).then(() => {
            if (newPasswordRef.current.value !== newConfirmPasswordRef.current.value) {
                    return (
                        setError('Passwords do not match'),
                        setTimeout(function() {
                            setOpen(false)
                            setError('')
                            currentPassword2Ref.current.value='';
                        }, delayInMilli) 
                    )   
                }

            if (newPasswordRef.current.value.length < minimumLength) {
                return (
                    setError('New password must be greater than or equal to 6 characters'),
                    setTimeout(function() {
                        setOpen(false)
                        setError('')
                        currentPassword2Ref.current.value='';
                    }, delayInMilli) 
                )
            }

            updatePassword(currentUser, newPasswordRef.current.value).then(() => {
                setMessage('Password Successfully Changed')
                setTimeout(function() {
                    setOpen(false)
                    setMessage('')
                    currentPassword2Ref.current.value='';
                    newEmailRef.current.value='';
                    newConfirmEmailRef.current.value='';
                }, delayInMilli)
            }).catch(() => {
                setError('Failed to change password')
                setTimeout(function() {
                    setError('')
                    setOpen(false)
                    currentPassword2Ref.current.value='';
                }, delayInMilli)
            })
        }).catch(() => {
            setError('Re-Authentication Failed')
            setTimeout(function() {
                setError('')
                setOpen(false)
                currentPassword2Ref.current.value='';
            }, delayInMilli)
        })

    }

    async function DeleteReAuth(e) {
        e.preventDefault()

        const credential3 = EmailAuthProvider.credential(currentUser.email, currentPassword3Ref.current.value);
        reauthenticateWithCredential(currentUser, credential3).then(() => {
            setMessage('Account Successfully Deleted. Sad to see you leave us')
                deleteUser(currentUser).then(() => {
                }).catch(() => {
                    setError('Failed to delete Account')
                })
            }).catch(() => {
                setError('Failed to delete Account')
            })

    }


    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/home')
        } catch {
            setError('Failed to log out')
        }
    }


  return (
    <>
        <TestContainer>
            <TestNavbar>
                <Title>Your Profile</Title>
            </TestNavbar>
            <TestBody>
                <ProfileWrapper>
                    <Viewer>
                        <Image>
                            <Avatar />
                        </Image>
                        <Email>
                            {currentUser.email}
                        </Email>
                        <DeleteBox>
                            <DeleteButton onClick={handleDelete}>
                                <DeleteIcon />
                            </DeleteButton>
                        </DeleteBox>
                    </Viewer>
                </ProfileWrapper>
                <FormsWrapper>
                    <FormWrapper>
                        <FormsViewer>
                            <Text>Change Email</Text>
                            <Form onSubmit={EmailReAuth}>
                                <FieldWrapper>
                                    <Input type='text' placeholder='Enter New Email' ref={newEmailRef} required />
                                </FieldWrapper>
                                <FieldWrapper>
                                    <Input type='text' placeholder='Re-enter Email' ref={newConfirmEmailRef} required/>
                                </FieldWrapper>
                                <FieldWrapper>
                                    <Input type='password' placeholder='Enter Current Password' ref={currentPasswordRef} required/>
                                </FieldWrapper>
                                <FieldWrapper>
                                    <Button type='submit'>Change Email</Button>
                                </FieldWrapper>
                            </Form>
                        </FormsViewer>
                    </FormWrapper>
                    <FormWrapper>
                        <FormsViewer>
                            <Text>Change Password</Text>
                            <Form onSubmit={PasswordReAuth}>
                                <FieldWrapper>
                                    <Input type='text' placeholder='Enter New Password' ref={newPasswordRef} required/>
                                </FieldWrapper>
                                <FieldWrapper>
                                    <Input type='text' placeholder='Re-enter Password' ref={newConfirmPasswordRef} required/>
                                </FieldWrapper>
                                <FieldWrapper>
                                    <Input type='password' placeholder='Enter Current Password' ref={currentPassword2Ref} required/>
                                </FieldWrapper>
                                <FieldWrapper>
                                    <Button type='submit'>Change Password</Button>
                                </FieldWrapper>
                            </Form>
                        </FormsViewer>
                    </FormWrapper>
                </FormsWrapper>
            </TestBody>
            <LinksWrapper>
                <HyperLink>
                    <Option to='/dashboard' as={Link}>
                        <AiOutlineHome />
                    </Option>
                    <OptionText>
                        Home
                    </OptionText>
                </HyperLink>
                <HyperLink>
                    <Option to='/create' as={Link}>
                        <AiOutlinePlus />
                    </Option>
                    <OptionText>
                        Create
                    </OptionText>
                </HyperLink>
                <HyperLink>
                    <Option to='/play' as={Link}>
                        <FiMonitor />
                    </Option>
                    <OptionText>
                        Play
                    </OptionText>
                </HyperLink>
                <HyperLink>
                    <Option onClick={handleLogout}>
                        <FiLogOut />
                    </Option>
                    <OptionText>
                        Logout
                    </OptionText>
                </HyperLink>
            </LinksWrapper>
        </TestContainer>

        {/* Modal to show whether email/password change was successful or not */}
        <Modal show={open}>
            <Modal.Header>Status</Modal.Header>
            <Modal.Body>
                {message && <Message variant="success">{message}</Message>}
                {error && <Error variant="danger">{error}</Error>}
            </Modal.Body>
        </Modal>
        {/* Modal to confirm whether the user wants to delete their account or not */}
        <Modal show={open2}>
            <Modal.Header>Confirm Delete Account</Modal.Header>
            <form onSubmit={DeleteReAuth}>
                <Modal.Body>
                    {message && <Message variant="success">{message}</Message>}
                    If you would like to delete your account, please enter your account password below.
                    <input class='form-control' type='password' ref={currentPassword3Ref}/>
                    {error && <Error variant="danger">{error}</Error>}
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose}>Close</button>
                    <button type='submit'>Delete</button>
                </Modal.Footer>
            </form>

        </Modal>
    </>
  )
}
