import React from 'react';
import { logInWithGoogle } from '../../context/userContext';
import GoogleButton from '../../Components/GoogleButton/GoogleButton';
import './style.scss';

export default function Login() {

  return (
    <div className="overlay">
      <div className="modal">
        <span id="close"><i className="lni lni-close"></i></span>
        <div className="modalContent">
          <div className="modalInfo">
            <h3>Log in</h3>
            <p>Welcome, please log in!</p>
            <div className="social-login">
              <GoogleButton callback={logInWithGoogle} text="Sign in with Google" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}