import { createContext, useState, useEffect } from "react";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, googleProvider } from "../Utilities/firebase-config";

export const authWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then(result => { console.log("Signed in user", result.user); })
    .catch(error => { console.log("Sign in error", error); })
}

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        setCurrentUser(user)
      } else {
        console.log("no");
      }
    });
  }, [])

  return (
    <UserContext.Provider value={{ currentUser }}>{children}</UserContext.Provider>
  )

};
