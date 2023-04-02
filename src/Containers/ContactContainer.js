import React from 'react'
import NavBar from '../Components/NavBar'
import './ContactContainer.css'

const ContactContainer = () => {
  return (
    <div className='contact-container'>
        <NavBar />
        <div className='contact-body'>
        <h1>contact me</h1>
        <div className='contact-backing'>
        <h3> sample text</h3>
        </div>
        </div>
    </div>
  )
}

export default ContactContainer;