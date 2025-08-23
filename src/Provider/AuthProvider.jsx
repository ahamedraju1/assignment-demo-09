import React, { createContext, useEffect, useState } from 'react';
import app from '../Services/firebase.init';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }

    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    

    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData);
    }

    const resetPassword = (email)=>{
        setLoading(true);
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);    
            // console.log("current user", currentUser);  
        })
        return ()=>{
             unSubscribe();
        };
    },[]);



    const userInfo = {
        user,
        loading,
        setUser,
        createUser,
        userSignOut,
        signInUser,
        googleSignIn,
        setLoading,
        updateUser,
        resetPassword
    }


    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>;
};

export default AuthProvider;