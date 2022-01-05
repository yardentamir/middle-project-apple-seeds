
import React from 'react';
import { logOutWithGoogle } from '../../context/userContext';
import GoogleButton from '../../Components/GoogleButton/GoogleButton';
import './style.scss';

export default function LoginOut() {

  return (
    <div className="overlay">
      <div className="modal">
        <span id="close"><i className="lni lni-close"></i></span>
        <div className="modalContent">
          <div className="modalInfo">
            <h3>Log Out</h3>
            <p>See you soon!</p>
            <div className="social-login">
              <GoogleButton callback={logOutWithGoogle} text="Log Out" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}