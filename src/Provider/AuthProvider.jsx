import { createContext } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app)
//Google
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider);
    }


    const signUp = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    const Authentication ={
        googleSignIn,
        signUp,
        signIn
    }

    return (
        <AuthContext.Provider value={Authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;