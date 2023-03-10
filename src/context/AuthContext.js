import { createContext, useContext, useState, useEffect } from "react";
import { auth,db } from "../firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { setDoc,doc } from "firebase/firestore";

const AuthContext = createContext()

export function AuthContextProvider({ children }) {
    const [user,setUser] = useState({})

    function createDoc (email){
        setDoc(doc(db, 'users', email), {
            savedShows: []
        })
    }
    function signUp(email,password) {
        createUserWithEmailAndPassword(auth, email, password)
        createDoc(email)
    }
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logOut(){
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    })

    return (
        <AuthContext.Provider value={{ signUp,logIn,logOut,user }} >
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}