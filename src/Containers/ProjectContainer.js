import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "./ProjectContainer.css";
import python from "../media/python.mp4";
import smeco from "../media/smeco.mp4";
import summit from "../media/summit.mp4";
import github from "../media/github.svg";
import weather from "../media/weather.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ProjectContainer = () => {
	const [autoplay, setAutoplay] = useState(false);

	useEffect(() => {
		autoplaySettings();
	}, []);

	const autoplaySettings = () => {
		if (window.innerWidth <= 800) {
			setAutoplay(false);
		} else {
			setAutoplay(true);
		}
	};

	return (
		<div className="project-container">
			<NavBar />
			<div className="project-body">
				<div className="header">
					<h1>Projects</h1>
				</div>
				<div className="projects">
					<div className="project">
						<div className="project-one summit-project">
							<div className="project-one-header summit-header">
								<h3>Summit To Do - Mobile App</h3>
							</div>
							<div className="project-flex summit">
								<video
									loop
									controls
									muted
									autoPlay={autoplay}
									src={summit}
									className="summit-vid"
								/>
								<div className="project-one-text summit-text">
									<h4>React Native | Java | Spring</h4>
									<p>
										This app was created as a group capstone project at CodeClan
										and was my first time working with React Native.
										<br />
										The brief my group chose was to create a Munro-bagging app
										where users can view information on all 282 munros as well
										as track and add logs to Munros they have climbed.
										<ul>
											Features include:
											<li>Mark a Munro as climbed</li>
											<li>
												Users can see their progress via a progress bar on the
												homepage
											</li>
											<li>Create logs for Munros climbed</li>
											<li>Map feature with markers for all Munros</li>
											<li>
												Users can view all their logs on the user profile page
											</li>
											<li>
												Various filter and sort options for the list of Munros
											</li>
										</ul>
									</p>
									<div className="icon-links">
										<a
											href="https://github.com/RebeccaRBell/Summit-To-Do"
											target="_blank"
											rel="noreferrer"
										>
											<FontAwesomeIcon icon={faGithub} />
										</a>
										<a
											href="https://www.linkedin.com/feed/update/urn:li:activity:7058013682324131840/"
											target="_blank"
											rel="noreferrer"
										>
											<FontAwesomeIcon icon={faLinkedin} />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="project">
						<div className="project-two smeco-project">
							<div className="project-two-header">
								<h3>smeco - Environmental Education App</h3>
							</div>
							<div className="project-flex">
								<div className="project-two-text">
									<h4>React | MongoDB | Express.js | Node.js </h4>
									<p>
										This app was created for my first group project at CodeClan.
										<br />
										The brief my group chose was to create an environmental
										education app centring on carbon emissions.
										<ul>
											Features include:
											<li>
												Carbon emissions quiz comparing user to per capita
												emissions of a country based on their score.
											</li>
											<li>User's score can be added to leaderboard</li>
											<li>
												Leaderboard can be sorted in order of quiz score (low to
												high).
											</li>
											<li>
												Notice board of tips for lowering carbon emissions
											</li>
											<li>
												Tips can be posted, deleted and sorted by category
											</li>
											<li>
												View countries emissions graph to compare to quiz score
											</li>
										</ul>
									</p>
									<div className="icon-links">
										<a
											href="https://github.com/RebeccaRBell/smeco_group_project"
											target="_blank"
											rel="noreferrer"
										>
											<FontAwesomeIcon icon={faGithub} />
										</a>
										<a
											href="https://www.linkedin.com/posts/rebeccarbell_javascript-mongodb-expressjs-activity-7044000751215374336-saMt?utm_source=share&utm_medium=member_desktop"
											target="_blank"
											rel="noreferrer"
										>
											<FontAwesomeIcon icon={faLinkedin} />
										</a>
									</div>
								</div>
								<video src={smeco} controls loop muted autoPlay={autoplay} />
							</div>
						</div>
					</div>
					<div className="project">
						<div className="project-one travel-project">
							<div className="project-one-header">
								<h3>Travel Bucket List App</h3>
							</div>
							<div className="project-flex">
								<video src={python} controls loop muted autoPlay={autoplay} />
								<div className="project-one-text">
									<h4>Python | SQL | Flask | Django</h4>
									<p>
										This app was created as my first solo project at CodeClan.
										<br />
										The brief I chose was to create a CRUD application to help
										track a user's travel destinations.
										<ul>
											Features include:
											<li>Adding new trip</li>
											<li>Editing existing trips</li>
											<li>Delete trips</li>
											<li>
												Sort by continent, as well as past and future trips
											</li>
											<li>Add new cities and countries if not available</li>
											<li></li>
										</ul>
									</p>
									<div className="icon-links">
										<a
											href="https://github.com/RebeccaRBell/travel_bucket_list"
											target="_blank"
											rel="noreferrer"
										>
											<FontAwesomeIcon icon={faGithub} />
										</a>
										<a
											href="https://www.linkedin.com/posts/rebeccarbell_python-flask-juniordev-activity-7041837320483807232-pibi?utm_source=share&utm_medium=member_desktop"
											target="_blank"
											rel="noreferrer"
										>
											<FontAwesomeIcon icon={faLinkedin} />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="project">
						<div className="project-two weather-project">
							<div className="project-two-header weather-header">
								<h3>Weather Forecast App</h3>
							</div>
							<div className="project-flex">
								<div className="project-two-text weather-text">
									<h4>React | OpenWeather API</h4>
									<p>
										This app was originally created during my time studying with
										SheCodes on their React course.
										<br />
										After graduating from CodeClan I decided to give the project
										a refresh and restyle to update it with what I'd learned
										more recently.
										<ul>
											Features include:
											<li>
												View current temperature, weather description, humidity
												and wind speed for any searched city
											</li>
											<li>
												Change current temperature between celsius and
												fahrenheit units{" "}
											</li>
											<li>
												View 5-day forecast for any searched city including
												weather symbol, max and min temperatures
											</li>
											<li>
												See when the weather data was last updated for the
												searched city
											</li>
										</ul>
									</p>
									<div className="icon-links">
										<a
											href="https://github.com/RebeccaRBell/weatherapp2.0"
											target="_blank"
											rel="noreferrer"
										>
											<FontAwesomeIcon icon={faGithub} />
										</a>
										<a
											href="https://www.linkedin.com/feed/update/urn:li:activity:7064277262849720320/"
											target="_blank"
											rel="noreferrer"
										>
											<FontAwesomeIcon icon={faLinkedin} />
										</a>
										<a
											href="https://beccas-weather-app.netlify.app"
											target="_blank"
											rel="noreferrer"
										>
											<FontAwesomeIcon icon={faLink} />
										</a>
									</div>
								</div>
								<video src={weather} controls loop muted autoPlay={autoplay} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProjectContainer;
