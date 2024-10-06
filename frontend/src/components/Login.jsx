import React from 'react'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import './stylesheets/Login.css'

import {
  Link,
  NavLink,
} from 'react-router-dom'

const Login = () => {
  return (
    <>
      <Nav />

      <div id="LoginForm">

      {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#C4E0CC" d="M49.8,-60.8C60.8,-50.2,63.3,-30.9,67.5,-11.3C71.7,8.4,77.6,28.3,70.6,40.9C63.5,53.5,43.4,58.8,25.9,60.6C8.3,62.5,-6.6,60.9,-24.1,58.1C-41.6,55.3,-61.7,51.2,-73.3,38.7C-84.9,26.1,-88.1,5,-84.1,-14.3C-80.1,-33.6,-68.9,-51.2,-53.6,-61C-38.4,-70.7,-19.2,-72.8,0.1,-73C19.4,-73.1,38.9,-71.3,49.8,-60.8Z" transform="translate(100 100)" />
      


      </svg> */}
        <form action="" method='post'>
          <h1>Login</h1>
          <div>

          <input type="email" placeholder='Email' name='email'/>
          
          <input type="password" placeholder='Password' name="password" id="" />
          </div>
          <input id='submitbtn' type="submit" />
          <span>Don't have a Account? <Link to="/Signup" id='SignUpLinkInLogin'>Sign Up</Link></span>
        </form>
      </div>    

      <Footer />
    </>
  )
}

export default Login