import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './style';


export default function Header() {

  return (

    <StyledHeader>
      <h1>header</h1>
    </StyledHeader>


    // <main>
    //   <div className="side-bar">
    //     <div className="logo-top">
    //       <h1>לוגו</h1>
    //     </div>
    //     <ul className="nav-links">
    //       <Link to="/" style={{ width: '100%' }} >
    //         <li className="nav-tab active" data-view-name="create">
    //           <i className="fas fa-pencil-alt"></i>
    //           <span>
    //             יצירה
    //           </span>
    //         </li>
    //       </Link>
    //       <li className="nav-tab" data-view-name="settings">
    //         <i className="fas fa-sliders-h"></i>
    //         <span>
    //           הגדרות
    //         </span>
    //       </li>
    //     </ul>
    //   </div>
    // </main>

  )

}