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
		</div>
	);
}

export default Header;
