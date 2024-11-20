import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/project.css'
import img1 from '../image/p1.png'
import img2 from '../image/p4.png'
import img3 from '../image/p3.png'
import direction from '../image/images-removebg-preview.png'
function Project() {

  const projects = [
    {
      image: img1,
      name: 'Web Music Player',
      content: 'Developed a Dynamic Web Music Player Utilizing the MERN Stack, enabling seamless playback and Organization Music Files with an Intuitive User Interface. ',

      github: '',
      liveDemo: ''
    },
    {
      image: img2,
      name: 'Advance Todo App',
      content: 'Developed a Dynamic Web Music Player Utilizing the MERN Stack, enabling seamless playback and Organization Music Files with an Intuitive User Interface.',
      github: 'https://github.com/zenoworld/Advance-Todo-App',
      liveDemo: ''
    },
    {
      image: img3,
      name: 'Tour Booking Website',
      content: 'Developed a Dynamic Web Music Player Utilizing the MERN Stack, enabling seamless playback and Organization Music Files with an Intuitive User Interface.',
      github: '',
      liveDemo: ''
    },
  ]


  return (
    <div id='project-container'>
      <div id='project-container-main'>
        <h1 id='project-container-h1'>My Projects</h1>
        <div id='inner-container'>


          {projects.map((project, index) => (
            <div id='project' key={index}>

              <div id='project-image'>
                <img id='img' src={project.image} width='310px' height='220px' ></img>
              </div>

              <div id='project-name'>
                <h2>{project.name}</h2>
                <span>{project.content}</span>
              </div>

              <div id='project-buttons'>
                <button id='project-btn'>Github Link</button>
                {/* <button id='project-btn'>Live Demo</button> */}
              </div>

            </div>
          ))}

          <NavLink to={"/allproject"}>
            <div id='view-div'>
              <div id='h3-div'>
                <h3 id='view-div-h3'>View All</h3>
              </div>

              <div id='direction-div'>
                <img src={direction} id='direction' width='30px' height='30px'></img>
              </div>
            </div>
          </NavLink>

        </div>
      </div>
    </div>
  )
}

export default Project