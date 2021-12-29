import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {


  return (
    <div>
      <div className="ui pointing menu">
        <div style={{ display: 'flex' }}>
          <Link to="/" className="item">Home</Link>
          <Link to="/game" className="item">Game</Link>
          <Link to="/edit" className="item">Edit Card</Link>
        </div>
      </div>
    </div>
  )

}