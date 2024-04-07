import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "./CVContainer.css";
import fcccert from "../media/fcccert.jpg";
import shecodesbasic from "../media/shecodesbasic.png";
import shecodesplus from "../media/shecodesplus.png";
import shecodesresponsive from "../media/shecodesresponsive.png";
import shecodesreact from "../media/shecodesreact.png";
import pythonlogo from "../media/pythonlogo.png";
import jslogo from "../media/jslogo.png";
import reactlogo from "../media/reactlog.png";
import javalogo from "../media/javalogo.png";
import github from "../media/github.svg";
import git from "../media/git.png";
import bootstrap from "../media/bootstrap.png";
import idea from "../media/idea.png";
import vscode from "../media/vscode.png";
import node from "../media/node.png";
import figma from "../media/figma.png";
import css from "../media/css.png";
import html from "../media/html.png";
import flask from "../media/flask.png";
import sql from "../media/sql.png";
import mongo from "../media/mongo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

const CVContainer = () => {
	return (
		<div className="cv-container">
			<NavBar />
			<div className="cv-body">
				<div className="header-and-download">
					<h1>CV</h1>
					<div className="download-link-container">
						<a
							className="pdf-link"
							href="/CV/RebeccaBellCV2023.pdf"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon
								icon={faFileDownload}
								className="download-icon"
							/>
						</a>
					</div>
				</div>
				<div className="row-one-container">
					<div className="coding-experience">
						<h3>Coding Experience</h3>
						<div className="coding-experience-section">
							<h4>Software Engineer - Curaleaf International</h4>
							<p>Aug 2023 - Current</p>
							<ul>
								<li>
									{" "}
									- Full-stack software engineering role working with various
									tech stacks across multiple applications
								</li>
								<li>
									{" "}
									- Working with languages, frameworks and libraries include
									Typescript, React, Python, Quart , Javascript and Firebase
								</li>
								<li>
									{" "}
									- Tasks include updating, maintaining and building of new
									features to both the staff-facing and patient-facing
									applications
								</li>
							</ul>
						</div>
						<div className="coding-experience-section">
							<h4>CodeClan - Professional Software Development</h4>
							<p>
								SQA - Professional Development Award
								<br />
								Jan 2023 - Apr 2023
							</p>
							<ul>
								<li>
									{" "}
									- Accredited Software Development Bootcamp teaching Python,
									JavaScript, React, Java, Spring, SQL, MongoDB, Flask, and
									Express.js
								</li>
								<li>
									{" "}
									- Designed and programmed a solo full-stack Python project, a
									group full-stack JS/React project, and a group full-stack Java
									& React project
								</li>
								<li> - Experience working with RESTful APIs</li>
								<li> - Worked using TDD first practices</li>
							</ul>
						</div>
						<div className="coding-experience-section">
							<h4>SheCodes - SheCodes Pro Programme</h4>
							<p>
								Online Bootcamp focussed on making tech more accessible to
								women.
								<br />
								Oct 2022 - Dec 2022
							</p>
							<ul>
								<li>
									- Completed all SheCodes courses included in their Pro
									Programme which focussed on Front-End Design and Development
								</li>
								<li>- Designed and programmed a weather app using React</li>
							</ul>
						</div>
					</div>

					<div className="languages">
						<h3>Languages & Frameworks</h3>

						<div className="languages-section">
							<img src={html} alt="HTML Logo" />
							<img src={css} alt="CSS Logo" />
							<img src={reactlogo} alt="React Logo" />
							<img src={jslogo} alt="JavaScript Logo" />
							<img src={pythonlogo} alt="Python Logo" />
							<img src={javalogo} alt="Java Logo" />
							<img src={node} alt="Node.js Logo" />
							<img src={mongo} alt="MongoDB Logo" />
							<img src={sql} alt="PostreSQL Logo" />
							<img src={flask} alt="Flask Logo" />
						</div>
						<div className="tools">
							<h3>Tools</h3>
							<div className="tools-section">
								<img src={github} alt="Github Logo" />
								<img src={git} alt="Git Logo" />
								<img src={vscode} alt="VSCode Logo" />
								<img src={figma} alt="Figma Logo" />
								<img src={bootstrap} alt="Bootstrap Logo" />
								<img src={idea} alt="IntelliJ Logo" />
							</div>
						</div>
					</div>
				</div>

				<div className="row-two-container">
					<div className="certificates">
						<h3>Certificates</h3>
						<div className="cert-images">
							<img src={shecodesreact} alt="SheCodes React Certificate" />
							<img
								src={shecodesresponsive}
								alt="SheCodes Responsive Certificate"
							/>
							<img src={fcccert} alt="FreeCodeCamp Certificate" />
							<img src={shecodesplus} alt="SheCodes Plus Certificate" />
							<img src={shecodesbasic} alt="SheCodes Basic Certificate" />
						</div>
					</div>
					<div className="education">
						<h3>Education</h3>
						<div className="education-section">
							<h4>Royal Conservatoire of Scotland</h4>
							<p>
								BA Production Technology & Management
								<br />
								2015 - 2018
							</p>
							<ul>
								<li>
									- Stage Management specialism with placement at Bristol Old
									Vic
								</li>
								<li>- Optional extra module studied in Set & Costume Design</li>
							</ul>
						</div>
						<div className="education-section">
							<h4>Glasgow Clyde College</h4>
							<p>
								HND Music
								<br />
								2015 - 2018
							</p>
							<ul>
								<li>- Grade A performance diploma in Voice & Clarinet</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default CVContainer;
