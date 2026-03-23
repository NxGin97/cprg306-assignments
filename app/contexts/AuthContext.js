"use client";

import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, 
    GithubAuthProvider, GoogleAuthProvider, FacebookAuthProvider, 
    signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";

const AuthContext = createContext(); //creates global contect object, holds: user, login, logout

export const AuthContextProvider = ({children}) => {
    //the children = all component wrapped inside the provider will be given access to the user when it is set (and not null)
    const [user, setUser] = useState(null); //defaults to null (not logged in). Sets the current logged in user
    const [loading, setLoading] = useState(true);

    //creates GitHub login provider (taken from firebase)
    const gitHubSignIn = () => {
        const provider = new GithubAuthProvider(); 
        return signInWithPopup(auth, provider);
    };
    const facebookSignIn = () => {
        const provider = new FacebookAuthProvider(); 
        return signInWithPopup(auth, provider);
    };
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider(); 
        return signInWithPopup(auth, provider);
    };

    const emailSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const emailSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const firebaseSignOut = () => {
        return signOut(auth);
    };

    //runs every time auth state changes (login, logout, refresh)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser) {
                console.log("User authenticated: ", currentUser.email);
            } else {
                console.log("No user found");
            }
            setUser(currentUser); //updates user. if user is null, logged out, if user exists, logged in. 
            setLoading(false);
            
        }, (error) => {
            console.error("Authorization error", error);
            setUser(null);
            setLoading(false);
        });
        return() => unsubscribe();  //doesn't listen when component is unmounted
    }, );

    //Firebase user object:
    // {
    //   displayName: "Natalie",
    //   email: "natalie@example.com",
    //   uid: "abc123",
    //   photoURL: "https://...",
    //     }
    
    return (
        <AuthContext.Provider value = {{ user, gitHubSignIn, facebookSignIn, googleSignIn, emailSignIn, emailSignUp, firebaseSignOut }}>
            {children}
        </AuthContext.Provider>
    );
};

//const {user, gitHubSignIn } useUserAuth(); //custom hook.
export const useUserAuth = () => {
    return useContext(AuthContext);
};

