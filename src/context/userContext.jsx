import { createContext, useState, useEffect } from "react";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../Utilities/firebase-config";

export const logInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then(result => { console.log("Signed in user", result.user); })
    .catch(error => { console.log("Sign in error", error); })
}

export const logInWithFacebook = () => {
  signInWithPopup(auth, facebookProvider)
    .then(result => { console.log("Signed in user", result.user); })
    .catch(error => { console.log("Sign in error", error); })
}

export const logOutWithGoogle = () => {
  signOut(auth).then(() => {
    console.log('Sign-out successful');
  }).catch((error) => {
    console.log('Sign-out', error);
  });
}


export const UserContext = createContext();

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        setCurrentUser(user)
      } else {
        setCurrentUser("")
      }
    });
  }, [])

  return (
    <UserContext.Provider value={{ currentUser }}>{children}</UserContext.Provider>
  )

};
