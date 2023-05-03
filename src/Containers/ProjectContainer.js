import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "./ProjectContainer.css";
import python from "../media/python.mp4";
import smeco from "../media/smeco.mp4";
import summit from "../media/summit.mp4";
import github from "../media/github.svg";

const ProjectContainer = () => {
	return (
		<div className="project-container">
			<NavBar />
			<div className="project-body">
				<h1>Projects</h1>
				<div className="projects">
					<div className="project">
						<div className="project-one summit-project">
							<div className="project-one-header summit-header">
								<h3>Summit To Do - Mobile App</h3>
							</div>
							<div className="project-flex summit">
								<video
									src={summit}
									controls
									autoPlay
									loop
									muted
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
											<img src={github} alt="github logo" />
										</a>
										<a
											href="https://www.linkedin.com/feed/update/urn:li:activity:7058013682324131840/"
											target="_blank"
											rel="noreferrer"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
											>
												<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="project">
						<div className="project-two">
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
											<img src={github} alt="github logo" />
										</a>
										<a
											href="https://www.linkedin.com/posts/rebeccarbell_javascript-mongodb-expressjs-activity-7044000751215374336-saMt?utm_source=share&utm_medium=member_desktop"
											target="_blank"
											rel="noreferrer"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
											>
												<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
											</svg>
										</a>
									</div>
								</div>
								<video src={smeco} controls autoPlay loop muted />
							</div>
						</div>
					</div>
					<div className="project">
						<div className="project-one">
							<div className="project-one-header">
								<h3>Travel Bucket List App</h3>
							</div>
							<div className="project-flex">
								<video src={python} controls autoPlay loop muted />
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
											<img src={github} alt="github logo" />
										</a>
										<a
											href="https://www.linkedin.com/posts/rebeccarbell_python-flask-juniordev-activity-7041837320483807232-pibi?utm_source=share&utm_medium=member_desktop"
											target="_blank"
											rel="noreferrer"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
											>
												<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="project"></div>
			<div className="project"></div>
			<Footer />
		</div>
	);
};

export default ProjectContainer;
