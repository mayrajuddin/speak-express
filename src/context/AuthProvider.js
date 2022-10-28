import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.init'
import { useState } from 'react';
import { useEffect } from 'react';
export const authContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const createUserEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const googleSign = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubSign = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const updatePoofileInfo = (obj) => {
        return updateProfile(auth.currentUser, obj)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe();
    }, [])



    const authInfo = { user, loading, createUserEmailPass, userLogin, logOut, googleSign, githubSign, updatePoofileInfo }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;