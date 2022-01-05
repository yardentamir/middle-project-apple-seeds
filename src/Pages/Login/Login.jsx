import React from 'react';
import { logInWithGoogle, logInWithFacebook } from '../../context/userContext';
import GoogleButton from '../../Components/GoogleButton/GoogleButton';
import FacebookButton from '../../Components/FacebookButton/FacebookButton';
import './style.scss';

export default function Login() {

  return (
    <>
      {
        <div className="overlay">
          <div className="modal">
            <span id="close"><i className="lni lni-close"></i></span>
            <div className="modalContent">
              <div className="modalInfo">
                <h3>Log in</h3>
                <p>Welcome, please log in!</p>
                <div className="social-login">
                  <GoogleButton callback={logInWithGoogle} text="Sign in with Google" />
                  <FacebookButton callback={logInWithFacebook} text="Sign in with Facebook" />
                </div>
              </div>
            </div>
          </div>
        </div>

      }

    </>


  )
}