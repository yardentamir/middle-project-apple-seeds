import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './style';
import { UserContext } from '../../Context/userContext';
import Login from '../../Pages/Login/Login';
import LogOut from '../../Pages/Login/LogOut';
import './style.scss';


export default function Header() {
  const { currentUser } = useContext(UserContext);
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignInClick, setIsSignInClick] = useState(false);

  useEffect(() => {
    currentUser ? setIsSignIn(true) : setIsSignIn(false);
    setIsSignInClick(false);
  }, [currentUser])

  return (
    <>
      {/* <StyledHeader>
      <h1>header</h1>
    </StyledHeader> */}
      <header>
        <nav>
          <div className="container">
            <ul className="nav-list">
              <li className="nav-logo">
                <div className="logo">
                  <i className="fab fa-sass"></i>
                </div>
                <button className="btn" id="nav-toggle">
                  <i className="fa fa-bars"></i></button>
              </li>

              <li className="nav-link">Search Recipe</li>

              <li className="nav-link">Work<i className="fa fa-chevron-up"></i>
                <ul className="nav-drop">
                  <li>Portfolio</li>
                  <li>Showcase</li>
                </ul>
              </li>

              <li className="nav-link">My Favorites</li>
              <li className="nav-item">
                <div>{
                  currentUser ? <button onClick={() => setIsSignInClick(true)} className="btn">{currentUser.providerData[0].displayName[0]}</button> : <button onClick={() => setIsSignInClick(true)} className="btn">Sign in</button>
                }</div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {(isSignIn && isSignInClick) ? <LogOut /> : ""}
      {(!isSignIn && isSignInClick) ? <Login /> : ""}
    </>
  )

}

{/* 
    // <main>
    //   <div classNameName="side-bar">
    //     <div classNameName="logo-top">
    //       <h1>לוגו</h1>
    //     </div>
    //     <ul classNameName="nav-links">
    //       <Link to="/" style={{ width: '100%' }} >
    //         <li classNameName="nav-tab active" data-view-name="create">
    //           <i classNameName="fas fa-pencil-alt"></i>
    //           <span>
    //             יצירה
    //           </span>
    //         </li>
    //       </Link>
    //       <li classNameName="nav-tab" data-view-name="settings">
    //         <i classNameName="fas fa-sliders-h"></i>
    //         <span>
    //           הגדרות
    //         </span>
    //       </li>
    //     </ul>
    //   </div>
    // </main> */}