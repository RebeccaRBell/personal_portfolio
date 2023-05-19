import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { faS } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faHand, faPhone, faHome, faFile, faSquarePhoneFlip} from '@fortawesome/free-solid-svg-icons';


library.add(faS, faPencil, faHand, faPhone, faHome, faFile, faSquarePhoneFlip);


const NavBar = () => {

  return (
    <div className='nav-bar'>
   <NavLink to='/'> <div className='name-logo'><p className='letter-r'>R</p><p className='letter-b'>B</p></div></NavLink>
        <ul className='nav-list'>
                <li> <NavLink  exact to='/'><FontAwesomeIcon icon="fa-solid fa-house"/></NavLink></li>
                <li><NavLink activeClassName='active' className='highlight-project' to='/projects'><FontAwesomeIcon icon='fa-solid fa-pencil'/></NavLink></li>
                <li><NavLink activeClassName='active' className='highlight-about' to='/about'><FontAwesomeIcon icon='fa-solid fa-circle-user'/></NavLink></li>
                <li><NavLink activeClassName='active' className='highlight-cv' to='/cv'><FontAwesomeIcon icon='fa-solid fa-file'/></NavLink></li>
                <li><NavLink activeClassName='active' className='highlight-contact' to='/contact'><FontAwesomeIcon icon='fa-solid fa-square-phone-flip'/></NavLink></li>
        </ul>
    </div>
  )
}

export default NavBar;