import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import './CVContainer.css'

const CVContainer = () => {
  return (
    <div className='cv-container'>
    <NavBar />
    <div className='cv-body'>
      <h1>cv</h1>
    </div>
    <Footer />
    </div>
  )
}

export default CVContainer;