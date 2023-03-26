import React from 'react'
import NavBar from '../Components/NavBar'
import './ContactContainer.css'

const ContactContainer = () => {
  return (
    <div className='contact-container'>
        <NavBar />
        <h1>Contact Me</h1>
        <div className='contact-form'>
        <form>
        <div className='name-email'>
          <input className='type-input' type='text' placeholder='Name' required/>
          <input className='type-input' type='email' placeholder='Email' required/>
          </div>
          <textarea placeholder='Send me a message!' required/>
          <input className='submit-button' type='submit' value='Send Message'/>
        </form>
        </div>
    </div>
  )
}

export default ContactContainer