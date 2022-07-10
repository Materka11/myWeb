import React from 'react';

import AboutMe from './AboutMe';
import Form from './Form';
import Header from './Header';
import Work from './Work';

import '../styles/menu.css';

import { BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs';

function Menu({ classMenu, handleClickMenu }: { classMenu: string; handleClickMenu: () => void }) {
	const scrollToComponent = (value: number) => {
		const { innerHeight } = window;
		setTimeout(() => {
			window.scrollTo({
				top: innerHeight * value + 100,
				behavior: 'smooth'
			});
		}, 0);
	};

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
				<button
					onClick={() => {
						handleClickMenu();
					}}
				>
					HOME
				</button>
				<button
					onClick={() => {
						scrollToComponent(1);
						handleClickMenu();
					}}
				>
					ABOUT ME
				</button>
				<button
					onClick={() => {
						scrollToComponent(2);
						handleClickMenu();
					}}
				>
					WORK
				</button>
				<button
					onClick={() => {
						scrollToComponent(3);
						handleClickMenu();
					}}
				>
					CONTACT
				</button>
			</ul>
		</div>
	);
}

export default Menu;
