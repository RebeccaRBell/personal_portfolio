import React, { useState } from 'react'
import './HomepageContainer.css';
import { Link } from 'react-router-dom';
import { faS } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faHand, faPhone} from '@fortawesome/free-solid-svg-icons';


library.add(faS, faPencil, faHand, faPhone);

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
   
    <div className='intro'>
    <div className='left-column'>
      <h1>Rebecca Bell</h1>
      <h3>Junior Software Developer</h3>
      <div className='description-box'>
       <p>I'm Becca and I'm a Junior Software Developer based in Glasgow, Scotland. <br/>
       Currently in my final weeks of CodeClan's Professional Software Development course, I'm searching for my first Developer position.</p>
      </div>
      </div>
      <div className='right-column'>
      <div className='project-link' onMouseOver={mouseHoverProject} onMouseOut={mouseLeaveProject}>
    {hoverProject === false ? <Link to='/projects' className='link'><h2>Projects</h2></Link>: <Link to='/projects' className='link'><h2>Projects<span>   <FontAwesomeIcon icon="fa-solid fa-pencil" /></span></h2></Link>} </div>
    <div className='about-link' onMouseOver={mouseHoverAbout} onMouseOut={mouseLeaveAbout}> 
    {hoverAbout === false ? <Link to='/about' className='link'><h2>About</h2></Link> : <Link to='/about' className='link'><h2>About<span>  <FontAwesomeIcon icon="fa-regular fa-hand" /></span></h2></Link>}</div>
    <div className='cv-link' onMouseOver={mouseHoverCV} onMouseOut={mouseLeaveCV}> 
    {hoverCV === false ? <Link to='/cv' className='link'><h2>CV</h2></Link> : <Link to='/cv' className='link'><h2>CV<span>  <FontAwesomeIcon icon="fa-regular fa-hand" /></span></h2></Link>}</div>
    <div className='contact-link' onMouseOver={mouseHoverContact} onMouseOut={mouseLeaveContact}>
    {hoverContact === false ? <Link to='/contact' className='link'><h2>Contact Me</h2></Link> : <Link to='/contact' className='link'><h2>Contact Me<span>  <FontAwesomeIcon icon="fa-solid fa-phone" /></span></h2></Link>}
    </div>
      </div>
    </div>
    {/* <div className='squares'>
    <Link to='/projects' className='link'>
    <div className='projects-square square' onMouseOver={mouseHoverProject} onMouseOut={mouseLeaveProject}>
    {hoverProject  === false ? <FontAwesomeIcon icon="fa-solid fa-pencil" /> : <h3>Projects</h3>}
    </div></Link>
    <Link to='/about' className='link'>
    <div className='about-square square' onMouseOver={mouseHoverAbout} onMouseOut={mouseLeaveAbout}>
    {hoverAbout === false ? <FontAwesomeIcon icon="fa-regular fa-circle-user" /> : <h3>About</h3>}
    </div></Link>
  <Link to='/contact' className='link'><div className='contact-square square' onMouseOver={mouseHoverContact} onMouseOut={mouseLeaveContact}> 
  {hoverContact === false ? <h3>Contact</h3>
    :<h3>Contact<span><FontAwesomeIcon icon="fa-solid fa-phone" /></span></h3>}
    </div></Link>
  </div> */ }
    
    </div>
  )
}

export default HomepageContainer