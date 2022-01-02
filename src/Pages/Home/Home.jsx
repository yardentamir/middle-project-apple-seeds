import React, { useContext } from 'react';
import { DataContext } from '../../Context/dataContext';
import { Container } from '../../Components/styles/Container.styled';

export default function TeddyGamePage() {
  const { data } = useContext(DataContext);
  return (
    <div className="main-content">
      {console.log(data)}
      <div className="create" >
        <h1>CREATE</h1>
      </div>
    </div>
  )
}