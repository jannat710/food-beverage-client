import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app)
//Google
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState();
    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider);
    }


    const signUp = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    //Observer
    // useEffect(() =>{
    //     const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
    //         console.log('state change');
    //         setUser(currentUser);
    //     });
    //     return (() =>{
    //       return unSubscribe(); 
    //     })
    // },[]);


    const Authentication ={
        googleSignIn,
        signUp,
        signIn,
        // user,
    }

    return (
        <AuthContext.Provider value={Authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;