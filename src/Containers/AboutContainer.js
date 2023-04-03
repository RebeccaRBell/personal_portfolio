import React from 'react'
import NavBar from '../Components/NavBar';
import './AboutContainer.css';
import bristol from '../media/bristol.jpg';

const AboutContainer = () => {
  return (
    <div className='about-container'>
    <NavBar />
    <div className='about-body'>
      <h1>about me</h1>
      <div className='about-text-one'>
        <p>
          With my background in the arts and having worked as a freelance Stage Manager in the theatre industry for the past 5 years, I  find I'm able to bring my experience of blah blah blah blah.
        </p>
        <div className='image-one'>
        <img src={bristol} alt='theatre-image'/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutContainer;