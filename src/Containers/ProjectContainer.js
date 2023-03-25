import React from 'react'
import NavBar from '../Components/NavBar';
import './ProjectContainer.css';

const ProjectContainer = () => {
  return (
    <div className='project-container'>
    <NavBar />
    <div className='project-body'>
    <h1>Projects</h1>
    </div>
    </div>
  )
}

export default ProjectContainer;