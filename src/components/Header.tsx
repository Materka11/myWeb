import React from 'react';
import logo from '../img/logo.png';
import '../styles/header.css';

function Header() {
	return (
		<div className="header">
			<nav>
				<img src={logo} alt="logo" />
				<hr />
				<span>MENU</span>
				<a href="mailto:arekmaterka11@gmail.com?subject=Hi Arek, I'd like to say hello">SAY HELLO</a>
			</nav>
			<div className="head">
				<div className="hair" />
				<div className="face">
					<div className="eyebrows left" />
					<div className="eyebrows right" />
					<div className="eyes left" />
					<div className="eyes right" />
					<div className="lowerEyelid left" />
					<div className="lowerEyelid right" />
					<div className="nose" />
					<div className="mouth" />
				</div>
				<div className="ears left">
					<div className="line" />
				</div>
				<div className="ears right">
					<div className="line" />
				</div>
				<div className="neck left" />
				<div className="neck right" />
				<div className="body" />
			</div>
		</div>
	);
}

export default Header;
