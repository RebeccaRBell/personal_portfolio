import React , {useState} from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import { faS } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faHand, faPhone, faHome} from '@fortawesome/free-solid-svg-icons';


library.add(faS, faPencil, faHand, faPhone, faHome);


const NavBar = () => {
   const [hoverProject , setHoverProject] = useState(false);
  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);
  const [hoverCV, setHoverCV] = useState(false);
  const [hoverHome, setHoverHome] = useState(false);


    const mouseHoverHome= () => {
    setHoverHome(true);
  }

  const mouseLeaveHome = () => {
    setHoverHome(false);
  }
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
    <div className='nav-bar'>
   <Link to='/'> <div className='name-logo'><p className='letter-r'>R</p><p className='letter-b'>B</p></div></Link>
        <ul className='nav-list'>
                <li>{hoverHome === true ? <Link to='/'  onMouseOver={mouseHoverHome} onMouseOut={mouseLeaveHome}>Home</Link>: <FontAwesomeIcon icon='fa-regular fa-home' />}</li>
                <li><Link to='/projects'  onMouseOver={mouseHoverProject} onMouseOut={mouseLeaveProject}>Projects</Link></li>
                <li><Link to='/about'  onMouseOver={mouseHoverAbout} onMouseOut={mouseLeaveAbout}>About</Link></li>
                <li><Link to='/cv'  onMouseOver={mouseHoverCV} onMouseOut={mouseLeaveCV}>About</Link></li>
                <li><Link to='/contact'  onMouseOver={mouseHoverContact} onMouseOut={mouseLeaveContact}>Contact</Link></li>
        </ul>
    </div>
  )
}

export default NavBar;