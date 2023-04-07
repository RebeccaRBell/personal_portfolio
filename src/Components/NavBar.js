import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import { faS } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faHand, faPhone, faHome, faFile, faSquarePhoneFlip} from '@fortawesome/free-solid-svg-icons';


library.add(faS, faPencil, faHand, faPhone, faHome, faFile, faSquarePhoneFlip);


const NavBar = () => {

  return (
    <div className='nav-bar'>
   <Link to='/'> <div className='name-logo'><p className='letter-r'>R</p><p className='letter-b'>B</p></div></Link>
        <ul className='nav-list'>
                <li><Link to='/'><FontAwesomeIcon icon="fa-solid fa-house" /></Link></li>
                <li><Link to='/projects'><FontAwesomeIcon icon='fa-solid fa-pencil'/></Link></li>
                <li><Link to='/about'><FontAwesomeIcon icon='fa-solid fa-circle-user'/></Link></li>
                <li><Link to='/cv'><FontAwesomeIcon icon='fa-solid fa-file'/></Link></li>
                 <li><Link to='/contact'><FontAwesomeIcon icon='fa-solid fa-square-phone-flip'/></Link></li>
        </ul>
    </div>
  )
}

export default NavBar;