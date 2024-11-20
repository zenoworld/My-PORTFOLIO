import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../style/home.css'
import img from '../image/profile-pic-removebg-preview.jpg'
import github from '../image/github-brands-solid.svg'
import linkedin from '../image/linkedin-brands-solid.svg'
import fb from '../image/facebook-brands-solid.svg'
import insta from '../image/square-instagram-brands-solid.svg'
import About from './About'
import Project from './Project'

const roles = ["Frontend Developer", "UI/UX Designer", "React Developer"];
const Home = () => {

  const [currentRole, setCurrentRole] = useState(roles[0]);

  useEffect(() => {
    let index = 0;
    const roleInterval = setInterval(() => {
      index = (index + 1) % roles.length;
      setCurrentRole(roles[index]);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);




  return (
    <>
{/* data-scroll data-scroll-section data-scroll-speed=".2" */}
       <section  className='home-container'>
        <div className='home-main-container'>

          <div id='home-pic'>
            <img src={img} width='300px' height='340px' alt="profile pic" />
          </div>
          <div id='content-p'>
            <span id='content-h3'>Hello, Myself</span><br />
            <span id='content-h1'>Subhro Majumder</span>
            <div id='content-about'>
              <h3 id='content-about-h3'>{currentRole}</h3>
            </div>


            <div id='btn-div'>
              <a href="/Resume 1.0.pdf" download="Resume 1.0.pdf"><button id='btn'>Download CV</button></a>
              <NavLink to={'/contact'}><button id='btn'>Contact</button></NavLink>
            </div>
            <div id='social-icons'>
              <a href='https://github.com/zenoworld'><img id='git' src={github} width='40px' height='40px'></img></a>
              <a href='https://www.linkedin.com/in/subhro-majumder-5547702a7|'><img id='linkedin' src={linkedin} width='40px' height='40px'></img></a>
              <a href='https://www.facebook.com/sourav.shina.9/'><img id='fb' src={fb} width='40px' height='40px'></img></a>
              <a href='https://www.instagram.com/subhro.majumder/?hl=en'><img id='insta' src={insta} width='40px' height='40px'></img></a>
            </div>
          </div>

        </div>
      </section>


      <section id='section-about'>
        <About />
      </section> 

      <section id='section-project'>
        <Project />
      </section>

    </>

  )
}

export default Home
