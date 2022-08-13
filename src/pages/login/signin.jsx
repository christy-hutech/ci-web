import React, { useState } from 'react'
import "./signin.css";
import closeBtn from "../../assets/images/login/close-btn.svg";
import googleBtn from "../../assets/images/login/google.svg";
import facebookBtn from "../../assets/images/login/facebook-logo.svg";
import twitterBtn from "../../assets/images/login/twitter-logo.svg";
import instaBtn from "../../assets/images/login/insta-logo.svg";

function Signin() {
  const [loginStatus,setLoginStatus] = useState(false)
  const login =() => {
    loginStatus === true ? setLoginStatus(false) : setLoginStatus(true)
  }

  return (
    <>  
      {/* <div className='popup-back'></div> */}
      {/* <div className='signin-wrapper'> */}
          <form className='popup-form'>
            {loginStatus === true ? ( 
              <div className='signin'>
                <h3>Signin or Signup</h3>
                <p className='share-btn'>
                  <input className='email input-field' type="email" placeholder='Email'/>
                </p>
                <p className='share-btn'>
                  <input className='submit-1' type="submit"  value="Proceed"/>
                </p>
                <p className='section-or'>OR</p>
                <p className='share-btn'>
                  <img className='share-btn-logo' src={googleBtn} alt="Google" width="28"/>
                  <input className='submit-2' type="submit"  value="Continue with Google"/>
                </p>
                <p className='share-btn'>
                  <img className='share-btn-logo' src={facebookBtn} alt="Facebook" width="28"/>
                  <input className='submit-3' type="submit"  value="Continue with Facebook"/>
                </p>
                <p className='share-btn'>
                  <img className='share-btn-logo' src={twitterBtn} alt="Twitter" width="28"/>
                  <input className='submit-4' type="submit"  value="Continue with Twitter"/>
                </p>
                <p className='share-btn'>
                  <img className='share-btn-logo' src={instaBtn} alt="Instagram" width="28"/>
                  <input className='submit-5'type="submit"  value="Continue with Instagram"/>
                </p>
                <p className='terms'>By joining, or logging in via Facebook, you accept our Terms of Service and Privacy Policy.</p>
                <p className='terms'>Don’t have an acount? <span onClick={login} className='login-btn'>Sign up</span></p>
              </div>
            ) : (
              <div className='sign-up'>
                <h3>Sign up</h3>
                <p className='terms top'><span className='sbtitle'>Already have an account?</span><span onClick={login} className='login-btn'>Log in</span></p>
                <p className='share-btn'>
                  <img className='share-btn-logo' src={googleBtn} alt="Google" width="28"/>
                  <input className='submit-2' type="submit"  value="Continue with Google"/>
                </p>
                <p className='share-btn'>
                  <img className='share-btn-logo' src={facebookBtn} alt="Facebook" width="28"/>
                  <input className='submit-3 ' type="submit"  value="Continue with Facebook"/>
                </p>
                <p className='section-or'>OR</p>
                <p className='share-btn'>
                  <input className='first-name input-field' type="text" placeholder='First Name'/>
                </p>
                <p className='share-btn'>
                  <input className='last-name input-field' type="text" placeholder='Last Name'/>
                </p>
                <p className='share-btn'>
                  <input className='email input-field' type="email" placeholder='Email'/>
                </p>
                <p className='share-btn'>
                  <input className='Password input-field' type="password" placeholder='Password'/>
                </p>
                <p className='share-btn'>
                  <input className='submit-1' type="submit"  value="Sign up"/>
                </p>
                <p className='share-btn'>
                  <img className='share-btn-logo' src={instaBtn} alt="Instagram" width="28"/>
                  <input className='submit-5'type="submit"  value="Continue with Instagram"/>
                </p>
                <p className='terms'>By joining, or logging in via Facebook, you accept our Terms of Service and Privacy Policy.</p>
              </div>
            )}
          </form>
      {/* </div> */}
    </>
  )
}

export default Signin