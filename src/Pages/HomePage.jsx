import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';


export default function TeddyGamePage() {
  const { value, setValue } = useContext(UserContext);
  return (
    <div className="main-content w-100 p-5">
      <div className="create" data-view-active="true">
        <h1>CREATE</h1>
        <div>{value[0].id}</div>
        <div onClick={() => setValue("hey")}>change value</div>
      </div>
    </div>
  )
}