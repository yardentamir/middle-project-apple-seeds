import React, { useContext } from 'react';
import { authWithGoogle } from "../Context/userContext";
import { UserContext } from '../Context/userContext';

export default function Login() {
  const { value, setUser } = useContext(UserContext);
  return (
    <div className="main-content">
      <div className="create">
        <button onClick={authWithGoogle}>LOGIN</button>
        <h1>CREATE</h1>
        <div>{JSON.stringify(value)}</div>
        <div onClick={() => setUser("hey")}>change value</div>
      </div>
    </div>
  )
}