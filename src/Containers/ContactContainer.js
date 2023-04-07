import React from 'react'
import NavBar from '../Components/NavBar'
import './ContactContainer.css'
import Footer from '../Components/Footer'

const ContactContainer = () => {
  return (
    <div className='contact-container'>
        <NavBar />
        <div className='contact-body'>
        <h1>contact me</h1>
        <div className='contact-backing'>
        <p> If you'd like to get in touch, you can reach me via <a href='https://www.linkedin.com/in/rebeccarbell/' target='_blank'>linkedin</a> or at rebeccaromanobell@gmail.com</p>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default ContactContainer;