import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import './HomepageContainer.css';
import { Link } from 'react-router-dom';
import { faS } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { ReactDOM } from 'react';

library.add(faS, faPencil);

const HomepageContainer = () => {

  const [hover, setHover] = useState(false);

  const mouseHover = () => {
    setHover(false);
  }

  const mouseLeave = () => {
    setHover(true);
  }

  return (
    <div className='homepage-container'>
    <NavBar />
    <div className='intro'>
      <h1>Rebecca Bell</h1>
      <h3>Junior Software Developer</h3>
    </div>
    <div className='squares'>
    <Link to='/projects' className='link'><div className='projects-square square' onMouseOver={mouseHover} onMouseOut={mouseLeave}>
    {hover  === true ? <FontAwesomeIcon icon="fa-solid fa-pencil" /> : <h3>Projects</h3>}
    </div></Link>
    <Link to='/about' className='link'>
    <div className='about-square square'>
      <p>About</p>
    </div> </Link>
    <Link to='/contact' className='link'><div className='contact-square square'>
    <p>Contact</p>
    </div></Link>
  </div>
    </div>
  )
}

export default HomepageContainer