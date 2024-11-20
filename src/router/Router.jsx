import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


import Home from '../components/Home.jsx';
import About from '../components/About.jsx';
import Project from '../components/Project.jsx';
import AllProject from '../components/AllProject.jsx';
import Contact from '../components/Contact.jsx';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path='/allproject' element={<AllProject/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    )
}

export default Router