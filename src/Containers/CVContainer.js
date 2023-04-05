import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import './CVContainer.css'
import shecodesbasic from '../media/shecodesbasic.png';
import shecodesplus from '../media/shecodesplus.png'
import shecodesresponsive from '../media/shecodesresponsive.png';
import shecodesreact from '../media/shecodesreact.png';
import pythonlogo from '../media/pythonlogo.png';
import jslogo from '../media/jslogo.png';
import reactlogo from '../media/reactlog.png';
import javalogo from '../media/javalogo.png'

const CVContainer = () => {
  return (
    <div className='cv-container'>
    <NavBar />
    <div className='cv-body'>
      <h1>cv</h1>
      <div className='row-one-container'>
      <div className='coding-experience'>
      <h3>coding experience</h3>
      <div className='coding-experience-section'>
      <h4>CodeClan - Professional Software Development</h4>
      <p>SQA - Professional Development Award<br />
      Jan 2023 - Apr 2023</p>
      <ul>
        <li> - Accredited Software Development Bootcamp teaching Python, JavaScript, React, Java, Spring, SQL, MongoDB, Flask, and Express.js</li>
        <li> - Designed and programmed a solo full-stack Python project, a group full-stack JS/React project, and a group full-stack Java & React project</li>
      </ul>
      </div>
      <div className='coding-experience-section'>
      <h4>SheCodes - SheCodes Pro Programme</h4>
      <p>Online Bootcamp focussed on making tech more accessible to women.<br />
      Oct 2022 - Dec 2022
      </p>
      <ul>
        <li>- Completed all SheCodes courses included in their Pro Programme which focussed on Front-End Design and Development</li>
        <li>- Designed and programmed a weather app using React</li>
      </ul>
     </div>
     </div>
     
     <div className='languages'>
        <h3>languages & frameworks</h3>
        <div className='languages-section'>
    <img src={reactlogo} alt='React Logo'/>
    <img src={jslogo} alt='JavaScript Logo'/>
    <img src={pythonlogo} alt='Python Logo'/>
    <img src={javalogo} alt='Java Logo'/>
          </div>
        </div>
      </div>

 <div className='row-two-container'>
 <div className='row-two'>
      <div className='certificates'>
        <h3>certifications</h3>
        <div className='cert-images'>
        <img src={shecodesreact} alt='SheCodes React Certificate'/>
        <img src={shecodesresponsive} alt='SheCodes Responsive Certificate'/>
        <img src={shecodesplus} alt='SheCodes Plus Certificate'/>
          <img src={shecodesbasic} alt='SheCodes Basic Certificate'/>
          

      </div>
        </div>
      </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default CVContainer;