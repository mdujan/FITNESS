/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/FirebaseConfig";


export const AuthContext =createContext(null);
// social auth providers:--> 
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
// create User:--> 
const createUser=(email, password,photoUrl)=>{
    // setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password,photoUrl)
}

    const signInUser = (email, password) =>{
        // setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

//google login-->
const googleLogin=()=>{
    // setLoading(true)
   return signInWithPopup(auth, googleProvider)
   
}

// LOGOUT:-->
const logOut=()=>{
    setUser(null)
    
    signOut(auth)
};
// observer --:>
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
         
         if (user) {
             
           setUser(user);
        //    setLoading(false)
         } 
          
       });
          return () =>unsubscribe();   
 },[]);
const values ={
    // logOut,loading
   user, createUser,signInUser, googleLogin,logOut
}


    return (
        <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;
