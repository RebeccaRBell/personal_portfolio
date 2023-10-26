import React from "react";
import NavBar from "../Components/NavBar";
import "./ContactContainer.css";
import Footer from "../Components/Footer";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactContainer = () => {
	const email = "rebeccaromanobell@gmail.com";
	return (
		<div className="contact-container">
			<NavBar />
			<div className="contact-body">
				<div className="header">
					<h1>Contact Me</h1>
				</div>
				<div className="contact-backing">
					<p>
						{" "}
						If you'd like to get in touch, please don't hesitate to contact me
						through the options below (plus a link to my github for good
						measure)!
					</p>
					<div className="icons-contact">
						<a
							href="https://www.linkedin.com/in/rebeccarbell/"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={faLinkedin} className="linkedin" />
						</a>
						<a
							href="https://github.com/RebeccaRBell"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={faGithub} className="github" />
						</a>
						<a href={`mailto:${email}`} target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faSquareEnvelope} className="envelope" />
						</a>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ContactContainer;
