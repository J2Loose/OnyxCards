import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import * as all from 'firebase/auth'


const AuthContext = React.createContext()

//function that allows for authentication to be used
export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    //firebase signup function. The email and password passed in are used to create an account using firebase
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    //firebase login function. The email and password passed in are used to sign the user in
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    //firebase reset password function. Custom reset password email is sent to the provided email with instructions to reset their password
    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }
    //firebase log out function. De-authenticates the user. The user is now prohibited to the protected pages even if they use their back buttons on their browser
    function logout() {
        return auth.signOut()
    }



    useEffect(() => {
         const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        }) 
        
    return unsubscribe
    })

    //allows for these functions to be used throughout my program
    const value = {
        currentUser,
        signup,
        login,
        resetPassword, 
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
