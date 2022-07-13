import React, { useEffect, useState, useRef } from 'react';
import logo from '../img/logo.png';
import background from '../img/Component 12 – 1@2x2.png';
import logoMenu from '../img/logoMenu.png';
import '../styles/mobile/header.css';
import '../styles/desktop/header.css';
import Menu from './Menu';

import { FiMessageCircle } from 'react-icons/fi';

interface NoScroll {
	setClassNoScroll: React.Dispatch<React.SetStateAction<string>>;
}

function Header({ setClassNoScroll }: NoScroll) {
	const [ xEye, setXEye ] = useState('');
	const [ yEye, setYEye ] = useState('');

	const [ xHead, setXHead ] = useState(0);
	const [ yHead, setYHead ] = useState(0);
	const [ rotXHead, setRotXHead ] = useState(0);
	const [ rotYHead, setRotYHead ] = useState(0);

	const eyesRef: any = useRef(null);

	const [ classMenu, setClassMenu ] = useState('inactive');
	const [ isToggledMenu, setIsToggledMenu ] = useState(false);
	const [ switchLogo, setSwitchLogo ] = useState(logo);
	const [ classNav, setClassNav ] = useState('');

	useEffect(
		() => {
			const update = (e: MouseEvent) => {
				const { innerWidth, innerHeight } = window;
				const { clientX, clientY } = e;

				if (innerWidth >= 1440) {
					setXEye(clientX * 100 / innerWidth + '%');
					setYEye(clientY * 100 / innerHeight + '%');

					setXHead(xHead + (clientX - xHead) * 0.15);
					setYHead(yHead + (clientY - yHead) * 0.15);
					setRotXHead(xHead / innerWidth * -2 + 1);
					setRotYHead(yHead / innerHeight * 2 - 1);
				}
			};
			window.addEventListener('mousemove', update);

			return () => {
				window.removeEventListener('mousemove', update);
			};
		},
		[ xEye, yEye ]
	);

	const styleEyes = {
		left: xEye,
		top: yEye,
		transform: `translate(-${xEye}, -${yEye})`
	};

	const styleHead = {
		transform:
			'rotateX(calc(-15deg * ' + rotXHead + '))  rotateY(calc(-15deg * ' + rotYHead + ')) translate(-50%, 0)'
	};

	const styleShadow = {
		boxShadow: `${rotXHead * 50}px ${rotYHead * -50}px 20px 0px rgba(66, 68, 90, 0.30)`
	};

	const handleClickMenu = () => {
		if (!isToggledMenu) {
			setClassMenu('active');
			setIsToggledMenu(true);
			setClassNoScroll('noScroll');
			setSwitchLogo(logoMenu);
			setClassNav('navMenu');
		} else {
			setClassMenu('inactive');
			setIsToggledMenu(false);
			setClassNoScroll('');
			setSwitchLogo(logo);
			setClassNav('');
		}
	};

	return (
		<div className="header">
			<nav className={classNav}>
				<img src={switchLogo} alt="logo" />
				<hr />
				<span className="spanMenu" onClick={handleClickMenu}>
					<span className="spanLink">CLOSE</span>
					<span className="spanLink menuSpan">MENU</span>
				</span>
				<FiMessageCircle className="icon" />
				<a href="mailto:arekmaterka11@gmail.com?subject=Hi Arek, I'd like to say hello">SAY HELLO</a>
			</nav>
			<div className="bust">
				<div style={styleHead} className="head">
					<div style={styleShadow} className="hair" />
					<div className="face">
						<div className="eyebrows left" />
						<div className="eyebrows right" />
						<div className={`eyes left`}>
							<div ref={eyesRef} style={styleEyes} className="ball" />
						</div>
						<div className={`eyes right`}>
							<div ref={eyesRef} style={styleEyes} className="ball" />
						</div>
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
					<div style={styleShadow} className="face shadow" />
					<div style={styleShadow} className="body" />
				</div>
			</div>
			<img className="background" src={background} alt="background" />
			<span className="name">
				<strong className="hi">Hi, my</strong> name is <strong>Arek</strong>
				<span className="description">
					I'm a <strong>self-taught frontend developer</strong> from Pomorskie, Poland.
				</span>
			</span>
			<span className="scroll" />
			<div className="scroll" />
			<div className="menuDesktop">
				<span className="headerMenu">MENU</span>
				<div className="menuDesktopFixed">
					<div className="subMenu">
						<div className="dot" />
						<div className="line" />
						<button>Home</button>
					</div>
					<div className="subMenu">
						<div className="dot" />
						<div className="line" />
						<button>About Me</button>
					</div>
					<div className="subMenu">
						<div className="dot" />
						<div className="line" />
						<button>Work</button>
					</div>
					<div className="subMenu">
						<div className="dot" />
						<div className="line" />
						<button>Contact</button>
					</div>
				</div>
			</div>
			<Menu classMenu={classMenu} handleClickMenu={handleClickMenu} />
		</div>
	);
}

export default Header;
