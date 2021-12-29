import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {


  return (
    <div>
      <div className="ui pointing menu">
        <div style={{ display: 'flex' }}>
          <Link to="/" className="item">Flash Card Game</Link>
          <Link to="/add" className="item">Add Card</Link>
          <Link to="/edit" className="item">Edit Card</Link>
        </div>
      </div>
    </div>
  )

}