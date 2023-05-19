import React, { useState } from 'react'
import './HomepageContainer.css';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { faS } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faHand, faPhone, faHome, faCircleUser, faFile, faSquarePhoneFlip} from '@fortawesome/free-solid-svg-icons';



library.add(faS, faPencil, faHand, faPhone, faHome, faCircleUser, faFile, faSquarePhoneFlip);


const HomepageContainer = () => {

  const [hoverProject , setHoverProject] = useState(false);
  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);
  const [hoverCV, setHoverCV] = useState(false);
  

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
		<div className="homepage-container">
			<div className="first-line"></div>
			<div className="second-line"></div>
			<div className="intro">
				<h1>Rebecca Bell</h1>
				<h3>Junior Software Developer</h3>
				<div className="icons">
					<div className="project-link">
						<Link
							to="/projects"
							className="link project-icon"
							onMouseOver={mouseHoverProject}
							onMouseLeave={mouseLeaveProject}
						>
							<FontAwesomeIcon icon="fa-solid fa-pencil" />
						</Link>
					</div>
					<div className="about-link">
						<Link
							to="/about"
							className="link about-icon"
							onMouseOver={mouseHoverAbout}
							onMouseLeave={mouseLeaveAbout}
						>
							<FontAwesomeIcon icon="fa-solid fa-circle-user" />
						</Link>
					</div>
					<div className="cv-link">
						<Link
							to="/cv"
							className="link cv-icon"
							onMouseOver={mouseHoverCV}
							onMouseLeave={mouseLeaveCV}
						>
							<FontAwesomeIcon icon="fa-solid fa-file" />
						</Link>
					</div>
					<div className="contact-link">
						<Link
							to="/contact"
							onMouseOver={mouseHoverContact}
							onMouseLeave={mouseLeaveContact}
						>
							<FontAwesomeIcon icon="fa-solid fa-square-phone-flip" />
						</Link>
					</div>
				</div>
				<div className="links">
					<div className="project-link">
						<Link to="/projects" className="link">
							{hoverProject === true ? <h2>Projects</h2> : null}
						</Link>
					</div>
					<div className="about-link">
						<Link to="/about" className="link">
							{hoverAbout === true ? <h2>About</h2> : null}
						</Link>
					</div>
					<div className="cv-link">
						<Link to="#contact" className="link">
							{hoverCV === true ? <h2>CV</h2> : null}
						</Link>
					</div>
					<div className="contact-link">
						<Link to="/contact" className="link">
							{hoverContact === true ? <h2>Contact</h2> : null}
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default HomepageContainer