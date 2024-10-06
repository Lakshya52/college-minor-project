import React from "react";
import Aos from 'aos'
import "./stylesheets/Features.css";

import {
  Link,
  NavLink,
} from 'react-router-dom'

const Features = () => {
  Aos.init({
    delay: 500,
    duration: 600,
  })
  return (
    <>
      <div id="why-us">
        {/* the below svg is the wave which is the part of hero section  */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F5F5F5"
            fillOpacity={1}
            d="M0,0L48,37.3C96,75,192,149,288,165.3C384,181,480,139,576,149.3C672,160,768,224,864,240C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
        {/* main content of the why us section starts here */}
        <div id="why-us-hero">
          <div id="why-us-wrapper">



            <div id="wu-top">
              <h2>WHY US</h2>
            </div>


            <div id="wu-bottom">
              <div style={{ marginLeft: 0 }} className="wu-card">
                <div className="wu-card-top">
                  {/* <img src="images/"> */}
                  <h4>Tracking</h4>
                </div>
                <br />
                <div className="wu-card-bottom">
                  it keep a fine track on all your income and expenses and give you the tabular representations also
                </div>
              </div>
              <div className="wu-card">
                <div className="wu-card-top">
                  {/* <img src="images/"> */}
                  <h4>Categorization</h4>
                </div>
                <br />
                <div className="wu-card-bottom">
                  You can create custom categories for better personalization
                  for example : expenses - travel, food | income - salary, 
                </div>
              </div>
              <div style={{ marginRight: 0 }} className="wu-card">
                <div className="wu-card-top">
                  {/* <img src="images/"> */}
                  <h4>Multiple Currencies</h4>
                </div>
                <br />
                <div className="wu-card-bottom">
                  The fine-track helps users to work with multiple currencies as
                  per their need
                </div>
              </div>
            </div>


            <div id="wu-bottom">
              <div style={{ marginLeft: 0 }} className="wu-card">
                <div className="wu-card-top">
                  {/* <img src="images/"> */}
                  <h4>Detailed Analysis</h4>
                </div>
                <br />
                <div className="wu-card-bottom">
                  The Fine-Track gives users a clean and user friendly dashboard
                  with detailed analysis
                </div>
              </div>
              <div className="wu-card">
                <div className="wu-card-top">
                  {/* <img src="images/"> */}
                  <h4>Transaction Export support</h4>
                </div>
                <br />
                <div className="wu-card-bottom">
                  The Fine track allows users to export their transaction from
                  the selected range in PDF and docs
                </div>
              </div>
              <div style={{ marginRight: 0 }} className="wu-card">
                <div className="wu-card-top">
                  {/* <img src="images/"> */}
                  <h4>Simple Interface</h4>
                </div>
                <br />
                <div className="wu-card-bottom">
                  Simplest interface for users to record their transactions
                </div>
              </div>
            </div>

            
            <div id="GetStartedBtn" data-aos="flip-down" data-aos-delay="500">
              <Link to="login">Get Started.! Its Free</Link>
              &nbsp;&nbsp;
              <Link to="about">Know More</Link>
            </div>
          
          
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
