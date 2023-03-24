import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav-bar'>
   <Link to='/'> <div className='name-logo'><p className='letter-r'>R</p><p className='letter-b'>B</p></div></Link>
        <ul className='nav-list'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </div>
  )
}

export default NavBar