import React, {useState, useRef} from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, Text, FormButton, Message, Error } from './SignupElements'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'




const Register = () => {
    const emailRef = useRef()
        const passwordRef = useRef()
        const passwordConfirmRef = useRef()
        const { signup } = useAuth()
        const [error, setError] = useState('')
        const [loading, setLoading] = useState(false)
        const [message, setMessage] = useState('')
        const history = useHistory()
        const delayInMilli = 1000;
        const defaultLength = 6;

        //function to create a user account
        async function handleSubmit(e) {
            e.preventDefault()

            if (passwordRef.current.value !== 
            passwordConfirmRef.current.value) {
                return setError('Passwords do not match')    
            }

            if (passwordRef.current.value.length < defaultLength) {
                return setError('Password needs to be at least 6 characters long')
            }
            
            try {
                setError('')
                setMessage('')
                setLoading(true)
                await signup(emailRef.current.value, passwordRef.current.value)
                setMessage('Registration Complete! Welcome to Onyx Cards') 
                setTimeout(function() {
                    history.push('/dashboard')
                }, delayInMilli)
            } catch {
                setError('Failed to create an account')
            }
            setLoading(false)
        }
    return (
        <>
          <Container>
            <FormWrap>
                <Icon to='/'>OnyxCards</Icon>    
                <FormContent>
                    <Form onSubmit={handleSubmit}>
                        <FormH1>Sign Up</FormH1>
                        {message && <Message variant="success">{message}</Message>}
                        {error && <Error variant="danger">{error}</Error>}
                            <FormLabel htmlFor='for'>Email</FormLabel>
                                <FormInput type='email' ref={emailRef} required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                                <FormInput type='password'  ref={passwordRef} required/>
                            <FormLabel htmlfor='for'>Confirm Password</FormLabel>
                                <FormInput type='password' ref={passwordConfirmRef} required />
                            <FormButton type='submit' disabled={loading}>Sign Up</FormButton>
                            <Text to='/signin'>Already have an account?</Text>
                    </Form>
                </FormContent>
            </FormWrap>    
          </Container>  
        </>
    )
}

export default Register