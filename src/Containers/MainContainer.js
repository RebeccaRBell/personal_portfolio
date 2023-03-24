import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutContainer from './AboutContainer';
import ContactContainer from './ContactContainer';
import ProjectContainer from './ProjectContainer';
import HomepageContainer from './HomepageContainer';
import './MainContainer.css';


const MainContainer = () => {
  return (
    <div className='main-container'>
        <Router>
      <Routes>
        <Route path='/' element={<HomepageContainer />}/>
        <Route path="/projects" element={<ProjectContainer />} />
        <Route path="/about" element={<AboutContainer />} />
        <Route path="/contact" element={<ContactContainer />} />
    </Routes>
    </Router>
    </div>
  )
}

export default MainContainer;