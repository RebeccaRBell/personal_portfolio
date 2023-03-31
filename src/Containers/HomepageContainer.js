import React, { useState } from 'react'
import './HomepageContainer.css';
import ContactContainer from './ContactContainer';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { faS } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faHand, faPhone, faHome, faCircleUser, faFile, faSquarePhoneFlip} from '@fortawesome/free-solid-svg-icons';



library.add(faS, faPencil, faHand, faPhone, faHome, faCircleUser, faFile, faSquarePhoneFlip);


const HomepageContainer = () => {

  const [hoverProject , setHoverProject] = useState(false);
  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);
  const [hoverCV, setHoverCV] = useState(false);
  

  const mouseHoverProject = () => {
    setHoverProject(true);
  }

  const mouseLeaveProject = () => {
    setHoverProject(false);
  }
  const mouseHoverAbout= () => {
    setHoverAbout(true);
  }

  const mouseLeaveAbout = () => {
    setHoverAbout(false);
  }
  const mouseHoverCV= () => {
    setHoverCV(true);
  }

  const mouseLeaveCV = () => {
    setHoverCV(false);
  }
  const mouseHoverContact= () => {
    setHoverContact(true);
  }

  const mouseLeaveContact = () => {
    setHoverContact(false);
  }


  return (
    <div className='homepage-container'>
    <div className='first-line'></div>
    <div className='second-line'></div>
    <div className='intro'>
      <h1>Rebecca Bell</h1>
      <h3>Junior Software Developer</h3>
      <div className='icons'>
        <div className='project-link' onMouseOver={mouseHoverProject} onMouseLeave={mouseLeaveProject}>
        <Link to='/projects' className='link'><FontAwesomeIcon icon='fa-solid fa-pencil'/></Link></div>
          <div className='about-link'onMouseOver={mouseHoverAbout} onMouseLeave={mouseLeaveAbout}>
           <Link to='/about' className='link'><FontAwesomeIcon icon="fa-solid fa-circle-user" /></Link></div>
          <div className='cv-link' onMouseOver={mouseHoverCV} onMouseLeave={mouseLeaveCV}>
           <Link to='/cv' className='link'><FontAwesomeIcon icon="fa-solid fa-file" /></Link></div>
           <div className='contact-link' onMouseOver={mouseHoverContact} onMouseLeave={mouseLeaveContact} >
           <a href='#contact' className='link'><FontAwesomeIcon icon="fa-solid fa-square-phone-flip" /></a></div>
      </div>
      <div className='links'>
      <div className='project-link' onMouseOver={mouseHoverProject} onMouseLeave={mouseLeaveProject}>
      <Link to='/projects' className='link'>{hoverProject  === true ? <h2>Projects</h2>: null}</Link></div>
    <div className='about-link'onMouseOver={mouseHoverAbout} onMouseLeave={mouseLeaveAbout}> 
    <Link to='/about' className='link'>{hoverAbout === true? <h2>About</h2>:null}</Link></div>
    <div className='cv-link' onMouseOver={mouseHoverCV} onMouseLeave={mouseLeaveCV}> 
    <Link to='#contact' className='link'>{hoverCV === true ? <h2>CV</h2>: null}</Link></div>
    <div className='contact-link' onMouseOver={mouseHoverContact} onMouseLeave={mouseLeaveContact} >
  <Link to='/contact' className='link'>{hoverContact === true ?<h2>Contact</h2>: null}</Link>
    </div>
    </div>
    </div>
<Footer />
  </div> 
  
  )
}

export default HomepageContainer