import React from 'react';

import '../styles/workContainer.css';
import { BsArrowRight } from 'react-icons/bs';

interface WorkContainer {
	title: string;
	description: string;
	date: string;
	isCodeOrWork: string;
	backgroundColor: string;
	link: string;
}

function WorkContainer({ title, description, date, isCodeOrWork, backgroundColor, link }: WorkContainer) {
	let styleContainer;

	if (backgroundColor === 'purple') {
		styleContainer = { backgroundColor: '#4831d4', color: '#ffffff' };
	} else if (backgroundColor === 'white') {
		styleContainer = { backgroundColor: '#ffffff', color: '#4831d4' };
	}

	return (
		<div style={styleContainer} className="container">
			<div className="text">
				<span>{title}</span>
				<p>
					{description}
					<br />
					<br />
					<strong>Created in {date}</strong>
				</p>
			</div>
			<a href={link}>
				<span>SEE MY {isCodeOrWork}</span>
				<BsArrowRight className="icon" />
			</a>
		</div>
	);
}

export default WorkContainer;
