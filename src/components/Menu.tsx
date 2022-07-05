import React from 'react';

import '../styles/menu.css';

import { BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs';

function Menu({ classMenu }: { classMenu: string }) {
	return (
		<div className={`menu ${classMenu}`}>
			<div className="socialLink">
				<hr />
				<div className="icons">
					<a href="https://github.com/materka11" className="icon">
						<BsGithub />
					</a>
					<a href="https://www.facebook.com/arkadiusz.materka" className="icon">
						<BsFacebook />
					</a>
					<a href="https://www.instagram.com/materka_144/" className="icon">
						<BsInstagram />
					</a>
				</div>
			</div>
			<ul className="link">
				<a>HOME</a>
				<a>ABOUT ME</a>
				<a>WORK</a>
				<a>CONTACT</a>
			</ul>
		</div>
	);
}

export default Menu;
