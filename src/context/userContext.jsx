import { createContext } from "react";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, googleProvider } from "../Utilities/firebase-config";
import { getRandomRecipes } from "../Utilities/api";

export const authWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then(result => { console.log("Signed in user", result.user); })
    .catch(error => { console.log("Sign in error", error); })
}

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log(user.uid);
  } else {
    console.log("no");
  }
});

export const RandomRecipes = async () => await getRandomRecipes();
export const UserContext = createContext(null);