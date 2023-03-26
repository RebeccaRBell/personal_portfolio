import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import './HomepageContainer.css';
import { Link } from 'react-router-dom';
import { faS } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faCircleUser, faPhone} from '@fortawesome/free-solid-svg-icons';

import { ReactDOM } from 'react';

library.add(faS, faPencil, faCircleUser, faPhone);

const HomepageContainer = () => {

  const [hoverProject , setHoverProject] = useState(false);
  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);

  const mouseHoverProject = () => {
    setHoverProject(false);
  }

  const mouseLeaveProject = () => {
    setHoverProject(true);
  }
  const mouseHoverAbout= () => {
    setHoverAbout(false);
  }

  const mouseLeaveAbout = () => {
    setHoverAbout(true);
  }
  const mouseHoverContact= () => {
    setHoverContact(false);
  }

  const mouseLeaveContact = () => {
    setHoverContact(true);
  }


  return (
    <div className='homepage-container'>
    <NavBar />
    <div className='intro'>
      <h1>Rebecca Bell</h1>
      <h3>Junior Software Developer</h3>
    </div>
    <div className='squares'>
    <Link to='/projects' className='link'>
    <div className='projects-square square' onMouseOver={mouseHoverProject} onMouseOut={mouseLeaveProject}>
    {hoverProject  === true ? <FontAwesomeIcon icon="fa-solid fa-pencil" /> : <h3>Projects</h3>}
    </div></Link>
    <Link to='/about' className='link'>
    <div className='about-square square' onMouseOver={mouseHoverAbout} onMouseOut={mouseLeaveAbout}>
    {hoverAbout === true ? <FontAwesomeIcon icon="fa-regular fa-circle-user" /> : <h3>About</h3>}
    </div></Link>
  <Link to='/contact' className='link'><div className='contact-square square' onMouseOver={mouseHoverContact} onMouseOut={mouseLeaveContact}> 
  {hoverContact === true ? <FontAwesomeIcon icon="fa-solid fa-phone" />
    :<h3>Contact</h3>}
    </div></Link>
  </div>
    </div>
  )
}

export default HomepageContainer