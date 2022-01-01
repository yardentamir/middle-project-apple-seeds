import React, { useContext } from 'react';
import { DataContext } from '../../Context/dataContext';
import { UserContext, authWithGoogle } from '../../Context/userContext';

export default function TeddyGamePage() {
  const { data } = useContext(DataContext);
  const { currentUser } = useContext(UserContext);
  return (
    <div className="main-content">
      {console.log(data)}
      {console.log(currentUser)}
      <div className="create" >
        <button onClick={authWithGoogle}>LOGIN</button>
        <h1>CREATE</h1>
      </div>
    </div>
  )
}