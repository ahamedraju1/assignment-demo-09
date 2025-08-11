import React, { createContext, useEffect, useState } from 'react';
import app from '../Services/firebase.init';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=> {
        const Unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            
        })
        return ()=>{
            Unsubscribe()
        }
    },[])

    const userInfo = {
        user,
        setUser,
        createUser
    }


    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>;
};

export default AuthProvider;