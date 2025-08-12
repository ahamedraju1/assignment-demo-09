import React, { createContext, useEffect, useState } from 'react';
import app from '../Services/firebase.init';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignOut = ()=>{
        return signOut(auth);
    }

    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    

    useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);    
            // console.log("current user", currentUser); 
        })
        return ()=>{
             unSubscribe();
        };
    },[]);



    const userInfo = {
        user,
        setUser,
        createUser,
        userSignOut,
        signInUser
    }


    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>;
};

export default AuthProvider;