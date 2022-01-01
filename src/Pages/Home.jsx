import React, { useContext } from 'react';
import { authWithGoogle } from "../Context/userContext";
import { UserContext } from '../Context/userContext';

export default function TeddyGamePage() {
  const { value, setValue } = useContext(UserContext);
  return (
    <div className="main-content">
      <div className="create" >
        <button onClick={authWithGoogle}>LOGIN</button>
        <h1>CREATE</h1>
        <div>{value[0].id}</div>
        <div onClick={() => setValue("hey")}>change value</div>
      </div>
    </div>
  )
}