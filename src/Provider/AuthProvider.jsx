import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app)
//Google
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState();
    // const [loading,setLoading]=useState(true);


    const googleSignIn = () =>{
        // setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }


    const signUp = (email,password) =>{
        // setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        // setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
        
        
    }


    //Observer
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
            console.log("state changed");
            setUser(currentUser);
            // setLoading(false);
        });
        return (()=>{
            return unsubscribe();
        })
    },[]);
            //Logout
            const logout = () =>{
                // setLoading(true);
                return signOut(auth);
               
                
            }


    const Authentication ={
        googleSignIn,
        signUp,
        signIn,
        user,
        logout,
        // loading
    }

    return (
        <AuthContext.Provider value={Authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;