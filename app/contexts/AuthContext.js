"use client";

import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GithubAuthProvider, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../utils/firebase";

const AuthContext = createContext(); //creates global contect object, holds: user, login, logout

export const AuthContextProvider = ({children}) => {
    //the children = all component wrapped inside the provider
    const [user, setUser] = useState(null); //defaults to null (not logged in). Sroes the current logged in user

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

    //logs the user out
    const firebaseSignOut = () => {
        return signOut(auth);
    };

    //runs every time auth state changes (login, logout, refresh)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {setUser(currentUser); //updates user. if user is null, logged out, if user exists, logged in. 
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
        <AuthContext.Provider value = {{ user, gitHubSignIn, facebookSignIn, googleSignIn, firebaseSignOut }}>
            {children}
        </AuthContext.Provider>
    );
};

//const {user, gitHubSignIn } useUserAuth(); //custom hook.
export const useUserAuth = () => {
    return useContext(AuthContext);
};

