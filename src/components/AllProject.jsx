import React from 'react';
import  '../style/allprojects.css'
import img1 from '../image/p1.png';
import img2 from '../image/p4.png';
import img3 from '../image/p3.png';
import img4 from '../image/p2.png';
import img5 from '../image/p5.png';
import img6 from '../image/p6.png';
import img7 from '../image/p7.png';
import img8 from '../image/p8.png';


const AllProject = () => {
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
            content: 'This app helps users efficiently manage their tasks by adding, editing, and organizing to-do lists. It ensures better productivity with features like due dates, priorities, and task completion tracking.',
            github: 'https://github.com/zenoworld/Advance-Todo-App',
            liveDemo: ''
        },
        {
            image: img3,
            name: 'Tour Booking Website',
            content: 'This website allows users to seamlessly book tours by browsing destinations, selecting packages, and securing reservations online. It enhances the travel experience with detailed itineraries.',
            github: '',
            liveDemo: ''
        },
        {
            image: img4,
            name: 'Map Tracker',
            content: 'This website enables users to track locations in real time using interactive maps, offering route planning and navigation features. ',
            github: 'https://github.com/zenoworld/Map-Tracker',
            liveDemo: ''
        },
        {
            image: img5,
            name: 'Weather App',
            content: 'This app provides real-time weather updates, including temperature, humidity, and forecasts for any location. It features an intuitive interface and personalized weather alerts for planning ahead.',
            github: 'https://github.com/zenoworld/WEATHER-APP',
            liveDemo: ''
        },
        {
            image: img6,
            name: 'Currency Converter',
            content: 'This app allows users to quickly convert currencies with real-time exchange rates. It supports multiple currencies and ensures accurate conversions for global transactions.',
            github: 'https://github.com/zenoworld/CURRENCY-CONVERTER',
            liveDemo: ''
        },
        {
            image: img7,
            name: 'Own Virtual Assistant',
            content: 'I Build a Own Virtual Assistant Using HTML , CSS , and JS. It can search whatever you say after clicking a button. It can Open Windows App also . I made this for fun !',
            github: '',
            liveDemo: ''
        },
        {
            image: img8,
            name: 'Quiz Website',
            content: 'This app allows users to create and take MCQ-based quizzes with customizable timers for each question. It tracks scores automatically and provides a detailed result summary at the end.',
            github: 'https://github.com/zenoworld/Quiz-Taking-Webpage',
            liveDemo: ''
        },
        
    ]
    return (
        <div id='allprojects-container'>
            {projects.map((project, index) => (

                <div id='allproject' key={index}>
                    <div id='allproject-image'>
                        <img id='img' src={project.image} width='330px' height='220px' ></img>
                    </div>

                    <div id='allproject-name'>
                        <h2>{project.name}</h2>
                        <span>{project.content}</span>
                    </div>

                    <div id='allproject-buttons'>
                        <a href={project.github}><button id='allproject-btn'>Github Link</button></a>
                        {/* <a href={project.liveDemo}><button id='allproject-btn'>Live Demo</button></a> */}
                    </div>
                </div>

            ))}
        </div>
    )
}

export default AllProject;