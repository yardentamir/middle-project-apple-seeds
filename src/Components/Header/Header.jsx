import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <header>
        <nav>
          <div className="container">
            <ul className="nav-list">
              <li className="nav-logo">
                <div>
                  <div>{
                    currentUser ? <button onClick={() => setIsSignInClick(true)} className="btn">{currentUser.providerData[0].displayName[0]}</button> : <button onClick={() => setIsSignInClick(true)} className="btn">Sign in</button>
                  }</div>
                </div>
                <button className="btn" id="nav-toggle">
                  <i className="fa fa-bars"></i></button>
              </li>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/recipe" className="nav-link">Search Recipes</Link>
              <Link to="/favorite" className="nav-link">My Favorites</Link>
            </ul>
          </div>
        </nav>
      </header>
      {(isSignIn && isSignInClick) && <LogOut />}
      {(!isSignIn && isSignInClick) && <Login />}
    </>
  )

}