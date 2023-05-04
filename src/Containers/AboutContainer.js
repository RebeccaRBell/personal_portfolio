import React from 'react'
import NavBar from '../Components/NavBar';
import './AboutContainer.css';
import bristol from '../media/bristol.jpg';
import prompt from '../media/bristolprompt.jpeg';
import lighting from '../media/lightingdesk.jpg';
import Footer from '../Components/Footer';

const AboutContainer = () => {
  return (
		<div className="about-container">
			<NavBar />
			<div className="about-body">
				<h1>About Me</h1>
				<div className="about-text-one">
					<div className="images">
						<div className="image-one">
							<img src={prompt} alt="Bristol Old Vic auditorium" />
						</div>
						<div className="image-two">
							<img src={bristol} alt="Bristol Old Vic auditorium" />
						</div>
						<div className="image-three">
							<img src={lighting} alt="Bristol Old Vic auditorium" />
						</div>
					</div>
					<p>
						With my background in Music and Theatre Production I've
						always had an interest in how creativity and art can be advanced with technology.
						After working as a freelance Stage Manager for 5 years and feeling
						pretty unchallenged and uninspired in the jobs I was doing, I was
						ready for a change of career. <br />
						<br />I found SheCodes' Introduction to Coding
						workshop and quickly discovered that web and software development
						seemed to be the perfect way I could combine my creativity with my problem-solving
						skills and eye for detail. <br />
						I then went on to complete SheCodes' Pro programme which is a
						front-end programming and design course, where I got to grips
						with HTML, CSS, JavaScript and React. After completing the course, I
						felt I needed further study to broaden my base knowledge of
						software development as I felt I didn't have a solid enough
						grounding purely from the SheCodes programme. This is where
						CodeClan comes in. <br />
						<br />
						CodeClan was recommended to me first-hand from someone who had gone
						through a career change and was able to make the transition into their first developer role after completing CodeClan's Professional Software
						Development course. And I'm so grateful it was recommended to me when it was. Attending an in-person software development bootcamp was the best thing I could have done at that point. It was an intense 16-weeks and really pushed me to challenge myself and really throw myself into this world I had really only scratched the surface of. <br />
            And now we're here. I've recently graduated from CodeClan, and am searching for my first developer role. 
            If you'd like to talk to me about anything I've mentioned or about any opportunities you think I might be a good fit for, please don't hesitate to get in touch!
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default AboutContainer;