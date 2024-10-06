import React, { useEffect } from 'react'
import Aos from 'aos'
import './stylesheets/Hero.css'
import {
  Link,
  NavLink,
} from 'react-router-dom'

const Hero = () => {
  useEffect(()=>{
    Aos.init();
    Aos.init({
      delay: 50,
      duration: 200,
    })
  }, [])
  return (
    <>
    <div id="hero">
      <div id="hero-wrapper">
        <div id="hero-wrapper-left" data-aos="fade-right">
          <h3>welcome to</h3>
          <h1>Fine-Track</h1>
          <p>
            A website which helps individuals or organizations to manage and
            track there financial journey.! Based on MERN Stack Developed and
            Designed by Lakshya.
          </p>
            <div id="GetStartedBtn" data-aos="flip-down" data-aos-delay="500">
              <Link to="login">Get Started</Link>
              &nbsp;&nbsp;
              <Link to="about">Know More</Link>
            </div>
        </div>
        <div id="hero-wrapper-right" data-aos="fade-left" >
          <img src="green man.svg" alt="hero image fine track" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero