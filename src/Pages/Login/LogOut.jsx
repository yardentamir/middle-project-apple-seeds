
import React from 'react';
import { logOutWithGoogle } from '../../Context/userContext';
import GoogleButton from '../../Components/GoogleButton/GoogleButton';
import './style.scss';

export default function LoginOut() {

  return (
    <>
      {
        <div className="overlay">
          <div className="modal">
            <span id="close"><i className="lni lni-close"></i></span>
            <div className="modalContent">
              {/* <img src="https://lilbotmedia.com/Outer_space.svg" alt="space rocket" /> */}
              <div className="modalInfo">
                <h3>Log in</h3>
                <p>We'll show you how to go to where no one has been to!</p>
                <div className="social-login">
                  <GoogleButton callback={logOutWithGoogle} text="Log Out" />
                </div>

              </div>
            </div>
          </div>
        </div>

      }

    </>


  )
}