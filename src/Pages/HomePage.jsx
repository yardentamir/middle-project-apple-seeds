import React, { useContext } from 'react';
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Utilities/firebase-config"

import { UserContext } from '../context/userContext';


const authWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then(result => { console.log("Signed in user", result.user); })
    .catch(error => { console.log("Sign in error", error); })
}

export default function TeddyGamePage() {
  const { value, setValue } = useContext(UserContext);
  return (
    <div className="main-content w-100 p-5">

      <div className="create" data-view-active="true">
        <button onClick={authWithGoogle}>LOGIN</button>

        <h1>CREATE</h1>
        <div>{value[0].id}</div>
        <div onClick={() => setValue("hey")}>change value</div>
      </div>
    </div>
  )
}