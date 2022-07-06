import React from 'react';

import '../styles/aboutMe.css';

function AboutMe() {
	return (
		<div className="aboutMe">
			<div className="containers">
				<div className="container">
					<span>History</span>
					<p>
						I started learning about the frontend from October 2017. Later I tested my knowledge on various
						projects but it was time to introduce some mechanics to my projects and the first language I
						learned was JavaScript. I made a little game with it. After JavaScript, came the powerful
						JavaScript library, React. This is how I learned React and started my first project based on
						this technology.
					</p>
				</div>
				<div className="container">
					<span>Skill</span>
					<p>
						<ul>
							<li>Very good knowledge of HTML5, CSS3 and JavaScript (ES6)</li>
							<li>Good knowledge of React 17</li>
							<li>Ability to build an application with React 17</li>
							<li>Ability to use the Git version control system</li>
							<li>Ability to use Sass</li>
							<li>Basic unit testing skills using the Jest framework and the Testing Library</li>
							<li>Basic knowledge of TypeScript</li>
							<li>Basic knowledge of PHP and MySQL</li>
							<li>Basic design skills in Adobe XD</li>
						</ul>
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
