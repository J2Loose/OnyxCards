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
    Error, 
    Text
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
            //firebase function that resets the user's password
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')     
        } catch {
            setError('No account is linked to this email')
        }

        setLoading(false)
    }
    return (
        <>
          <Container>
            <FormWrap>
                <Icon to='/'>OnyxCards</Icon>  
                <FormContent>
                    {/* form to enter email for password reset */}
                    <Form onSubmit={handleReset}>
                        <FormH1>Reset Password</FormH1>
                        {/* displays message based on whether the process succeeds or not */}
                        {error && <Error variant="danger">{error}</Error>}
                        {message && <Message variant="success">{message}</Message>}
                        <FormLabel>Email</FormLabel>    
                        <FormInput type='email' ref={emailRef} required/>
                        <FormButton type='submit' disabled={loading}>Reset Password</FormButton>
                        {/* Redirects to signin page */}
                        <Text to='/signin'>Remember your password?</Text>
                    </Form>    
                </FormContent>  
            </FormWrap>    
          </Container>  
        </>
    )
}

export default ForgotPassword
