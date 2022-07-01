import React, { useEffect, useState, useRef } from 'react';
import logo from '../img/logo.png';
import '../styles/header.css';

function Header() {
	const [ xEye, setXEye ] = useState(0);
	const [ yEye, setYEye ] = useState(0);
	const [ radianEye, setRadianEye ] = useState(0);
	const [ rotEye, setRotEye ] = useState(0);

	const eyesRef: any = useRef(null);

	useEffect(
		() => {
			const update = (e: MouseEvent) => {
				setXEye(eyesRef.current.offsetLeft + eyesRef.current.offsetWidth / 2);
				setYEye(eyesRef.current.offsetTop + eyesRef.current.offsetHeight / 2);
				setRadianEye(Math.atan2(e.clientX - xEye, e.clientY - yEye));
				setRotEye(radianEye * (180 / Math.PI) * -1 - 270);
			};
			window.addEventListener('mousemove', update);

			return () => {
				window.removeEventListener('mousemove', update);
			};
		},
		[ radianEye ]
	);

	const styleEyes = {
		transform: 'rotate(' + rotEye + 'deg)'
	};

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
					<div ref={eyesRef} style={styleEyes} className={`eyes left`} />
					<div ref={eyesRef} style={styleEyes} className={`eyes right`} />
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
