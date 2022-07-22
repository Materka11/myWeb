import React from 'react';

import '../styles/desktop/successForm.css';
import '../styles/mobile/successForm.css';

import { BsArrowLeft } from 'react-icons/bs';

function SuccessForm() {
	return (
		<div>
			<h1>Successful sent message</h1>

			<h2>Thank you for sending the message. I will try to answer as soon as possible.</h2>
			<a href="/">
				<span>Back to site</span>
				<BsArrowLeft className="icon" />
				<div className="btnDynamic">
					<span>Back to site</span>
					<BsArrowLeft className="icon" />
				</div>
			</a>
		</div>
	);
}

export default SuccessForm;
