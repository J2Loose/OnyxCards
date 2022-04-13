import React, {useRef, useState} from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, Text, FormButton } from './SigninElements'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import { Error } from '../Register/SignupElements'

const SignIn = () => {
    const emailRef = useRef()
        const passwordRef = useRef()
        const { login } = useAuth()
        const [error, setError] = useState('')
        const [loading, setLoading] = useState(false)
        const history = useHistory()

        //function which uses authcontext to log the user in, with exception handling
        async function handleSubmit(e) {
            e.preventDefault()

            try {
                setError('')
                setLoading(true)
                await login(emailRef.current.value, passwordRef.current.value)
                history.push('/dashboard')
            } catch {
                setError('Failed to log in')
            }
            setLoading(false)

        }
    return (
        <>
          <Container>
            <FormWrap>
                <Icon to='/'>OnyxCards</Icon>    
                <FormContent>
                    {/* signup form */}
                    <Form onSubmit={handleSubmit}>
                        <FormH1>Sign In</FormH1>
                        {error && <Error variant="danger">{error}</Error>}
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' ref={emailRef} required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password'  ref={passwordRef} required/>
                            <FormButton type='submit' disabled={loading}>Sign In</FormButton>
                            <Text to='/forgotten'>Forgot password?</Text>
                            <Text to='/signup'>Don't have an account?</Text>
                    </Form>
                </FormContent>
            </FormWrap>    
          </Container>  
        </>
    )
}

export default SignIn