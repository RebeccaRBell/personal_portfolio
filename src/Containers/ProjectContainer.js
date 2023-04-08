import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import './ProjectContainer.css';
import python from '../media/python.mp4';
import smeco from '../media/smeco.mp4';
 
const ProjectContainer = () => {
  return (
    <div className='project-container'>
    <NavBar />
    <div className='project-body'>
    <h1>Projects</h1>
    <div className='projects'>
      <div className='project'>
      <div className='project-one'>
        <div className='project-one-header'>
<h3>Travel Bucket List App</h3>
  </div>
<div className='project-flex'>
    <video src={python} controls autoPlay loop muted/>
    <div className='project-one-text'>
  
      <h4>Python | SQL | Flask | Django</h4>
      <p>This app was created as my first solo project at CodeClan. 
      <br />The brief I chose was to create a CRUD application to help track a user's travel destinations.
      <ul>Features include:
      <li>
        Adding new trip
      </li>
      <li>Editing existing trips</li>
      <li>Delete trips</li>
      <li>Sort by continent, as well as past and future trips</li>
      <li>Add new cities and countries if not available</li>
      <li></li></ul>
       </p>
    </div>
    </div>
    </div>
    </div>
    <div className='project'>
    <div className='project-two'>
  <div className='project-two-header'>
      <h3>smeco - Environmental Education App</h3>
  </div>
  <div className='project-flex'>
    <div className='project-two-text'>
      <h4>React | MongoDB | Express.js | Node.js </h4>
      <p>This app was created for my first group project at CodeClan.
      <br />The brief my group chose was to create an environmental education app centring on carbon emissions. 
      <ul>Features include:
      <li>
        Carbon emissions quiz comparing user to per capita emissions of a country based on their score. 
      </li>
      <li>User's score can be added to leaderboard</li>
      <li>Leaderboard can be sorted in order of quiz score (low to high).</li>
      <li>Notice board of tips for lowering carbon emissions</li>
      <li>Tips can be posted, deleted and sorted by category</li>
      <li>View countries emissions graph to compare to quiz score</li></ul>
       </p>
    </div>
        <video src={smeco} controls autoPlay loop muted/>
    </div>
    </div>
    </div>
    </div>
    
      </div>

      <div
        className='project'>
      </div>
      <div className='project'></div>
    <Footer />
    </div>
  )
}

export default ProjectContainer;