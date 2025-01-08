import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const googleSignIn = () =>{
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    const userSignOut = () => {
        return signOut(auth);
    };

    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const userInfo = {
        user,
        userSignIn,
        userSignOut,
        googleSignIn,
        userRegister,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
        });

        return () => {
            unsubscribe();
        };

    }, []);

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export {AuthContext, AuthProvider};