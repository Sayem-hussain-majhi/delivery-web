import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const AuthContext = createContext()
 

const AuthProvaider = ({children}) => {
    const [user, setUser] = useState(null) 
    const [loading, setLoading] = useState(true)

    // google signin
    const googleSignin = ()=>{
        // setLoading(true)
         signInWithPopup(auth, provider)
    }

    // create user
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    

    // login
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logout = ()=>{
       return signOut(auth)
    }

    // update user profile
    const updateUserProfile = ()=>{
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
    }







    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        });

        return ()=>{
            return unSubscribe()
        }
    },[])




    const authInfo = {
        googleSignin,
        createUser,
        login,
        logout,
        user,
        loading,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvaider;



















