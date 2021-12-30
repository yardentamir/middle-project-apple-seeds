import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {


  return (
    <main>
      <div className="side-bar">
        <div className="logo-top">
          <h1>לוגו</h1>
        </div>
        <ul className="nav-links">
          <Link to="/" style={{ width: '100%' }} >
            <li className="nav-tab active" data-view-name="create">
              <i className="fas fa-pencil-alt"></i>
              <span>
                יצירה
              </span>
            </li>
          </Link>
          <Link to="/game" style={{ width: '100%' }} >
            <li className="nav-tab" data-view-name="load">
              <i className="fas fa-gamepad"></i>
              <span>
                משחקים
              </span>
            </li>
          </Link>
          <li className="nav-tab" data-view-name="settings">
            <i className="fas fa-sliders-h"></i>
            <span>
              הגדרות
            </span>
          </li>
        </ul>
      </div>
    </main>

  )

}

    // <div>
    //   <div classNameNameName="ui pointing menu">
    //     <div style={{ display: 'flex' }}>
    //       <Link to="/" >Home</Link>
    //       <Link to="/game" >Game</Link>
    //       <Link to="/edit" >Edit Card</Link>
    //     </div>
    //   </div>
    // </div>