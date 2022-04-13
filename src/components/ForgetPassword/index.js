import React, {useRef, useState} from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Message,
    Error
}
from './ForgotPasswordElements'
import { useAuth } from '../../contexts/AuthContext'


const ForgotPassword = () => {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    //function to reset user's password
    async function handleReset(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')     
        } catch {
            setError('Failed to reset password')
        }

        setLoading(false)
    }
    return (
        <>
          <Container>
            <FormWrap>
                <Icon to='/'>OnyxCards</Icon>  
                <FormContent>
                    <Form onSubmit={handleReset}>
                        <FormH1>Reset Password</FormH1>
                        {error && <Error variant="danger">{error}</Error>}
                        {message && <Message variant="success">{message}</Message>}
                        <FormLabel>Email</FormLabel>    
                        <FormInput type='email' ref={emailRef} required/>
                        <FormButton type='submit' disabled={loading}>Reset Password</FormButton>
                    </Form>    
                </FormContent>  
            </FormWrap>    
          </Container>  
        </>
    )
}

export default ForgotPassword
