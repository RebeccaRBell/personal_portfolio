import React from 'react'
import NavBar from '../Components/NavBar';
import './AboutContainer.css';
import bristol from '../media/bristol.jpg';
import Footer from '../Components/Footer';

const AboutContainer = () => {
  return (
    <div className='about-container'>
    <NavBar />
    <div className='about-body'>
      <h1>about me</h1>
      <div className='about-text-one'>
        <p>
          I stumbled across the world of software and web development around a year ago and, as cheesy as it sounds, I haven't stopped coding since. With my background in Music and Theatre Production I've always had an interest in how creativity and technology combine. 
          After working as a freelance Stage Manager for 5 year and feeling pretty unchallenged and uninspired in the jobs I was doing, I was ready for a change of career. <br />
          I saw an ad for SheCodes' <i>Introduction to Coding</i> workshop and quickly discovered that web and software development was the perfect way to combine my creativity with my problem-solving skills and eye for detail. <br/>
          
        </p>
        <div className='image-one'>
        <img src={bristol} alt='Bristol Old Vic auditorium'/>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default AboutContainer;