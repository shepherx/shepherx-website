import './App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import React, { Fragment } from "react";

function Home() {
    return (
      <div class="container-main">
        <section id="showcase">
          <div class="video-container">
            <video
              src="/coverr-arctic-waves-157519728777211.mp4"
              autoPlay
              muted
              playsinLine
              loop
              type="video/mp4"
            ></video>
          </div>
          <div class="content">
            <h1>technical support & web development</h1>
            <div id="subtext">
              <h3>scottsdale, arizona</h3>
            </div>
          </div>
        </section>
        <section id="about-section">
         
            
          
          <div class="about-text">
            <div class="p-item">
                
             
              <div class="bio-wrapper">
                <h1 class="inside">
                  bio &#128507; &#127797; |
                </h1>
              
              </div>
              <p class="inside-p">
                Hey everyone, my name is Ian Shepherd, and I work at Medallia. I
                live in Scottsdale, Arizona.
                <br />
                <br />
                I graduated from Colorado State University with a Bachelor's in
                Computer Science. My skills include HTML, CSS, JavaScript, React, Vue,
                and Python.
                <br />
              </p>
              
  
            </div>
            <div class="i-item">
              <img src="/pic.jpg" alt="" />
            </div>
          </div>
        </section>
  
        <section class="second-bg">
          <div class="second-img-container">
            <img src="./root/img/tim-oun-jY_W5x74GTs-unsplash.png" alt="" />
          </div>
        </section>
  
        <section class="technologies">
         
          <div class="tech-container">
            <i class="fab fa-html5"></i>
            <i class="fab fa-css3-alt"></i>
            <i class="fab fa-js-square"></i>
            <i class="fab fa-python"></i>
          </div>
        </section>
  
        <section id="contact-me">
          <div class="contact-container">
            <div class="contact-text">
              <h1>let's get in contact</h1>
              <br />
              <p>ian shepherd</p>
              <p>scottsdale, az</p>
            
              <p>ianshepherx@gmail.com</p>
              <a target="_blank" rel="noreferrer" href="https://github.com/shepherx"
                ><i class="fab fa-github"></i
              ></a>
  
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ian-shepherd/"
                ><i class="fab fa-linkedin-in"></i
              ></a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/_shepherx/"
                ><i class="fab fa-instagram"></i
              ></a>
            </div>
            <div class="form-div">
              <form data-netlify="true" method="post" name="contact">
                Name:<br />
                <input type="text" name="name" /><br />
                Email:<br />
                <input type="text" name="mail" /><br />
                Comment:<br />
                <input type="text" name="comment" size="50" /><br /><br />
                <input id="btn-email" type="submit" value="Send" />
              </form>
            </div>
          </div>
        </section>
        
      </div>
      
    );
      
  }

export default Home;