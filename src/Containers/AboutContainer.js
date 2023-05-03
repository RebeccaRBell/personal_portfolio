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
      <h1>About Me</h1>
      <div className='about-text-one'>
        <p>
          I stumbled across the world of software and web development around a year ago and, as cheesy as it sounds, I haven't stopped coding since. With my background in Music and Theatre Production I've always had an interest in how creativity and technology can combine. 
          After working as a freelance Stage Manager for 5 year and feeling pretty unchallenged and uninspired in the jobs I was doing, I was ready for a change of career. <br /><br />
          I saw an ad for SheCodes' <i>Introduction to Coding</i> workshop and quickly discovered that web and software development was the perfect way to combine my creativity with my problem-solving skills and eye for detail. <br/>
          I then went on to complete SheCodes' Pro programme which is a front-end programming and design course, where I got to to grips with HTML, CSS, JavaScript and React.
          After completing the course I felt I needed do something else to broaden my base knowledge of software development as I felt I didn't have a solid enough grounding purely from the SheCodes programme, which is where CodeClan comes in. <br /><br />
          CodeClan was recommended to me first-hand from someone who had gone through a career change and was able to make get that first developer role after completing CodeClan's Professional Software Development course.
          
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