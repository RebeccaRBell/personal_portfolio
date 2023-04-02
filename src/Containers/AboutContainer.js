import React from 'react'
import NavBar from '../Components/NavBar';
import './AboutContainer.css';

const AboutContainer = () => {
  return (
    <div className='about-container'>
    <NavBar />
    <div className='about-body'>
      <h1>about me</h1>
      <div>
        <p>
          With my background in the arts and having worked as a freelance Stage Manager in the theatre industry for the past 5 years.
        </p>
      </div>
    </div>
    </div>
  )
}

export default AboutContainer;