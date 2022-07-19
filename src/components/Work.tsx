import React, { useState } from 'react';

import '../styles/mobile/work.css';
import '../styles/desktop/work.css';
import WorkContainer from './WorkContainer';

function Work() {
	const [ classContainer, setClassContainer ] = useState('');
	const [ classContainer2, setClassContainer2 ] = useState('');
	const [ classContainer3, setClassContainer3 ] = useState('');

	const handleClickActiveContainer = () => {
		if (classContainer === '') {
			setClassContainer('active');
		}
		if (classContainer === 'active') {
			setClassContainer2('active2');
		}
		if (classContainer2 === 'active2') {
			setClassContainer3('active3');
		}
	};

	const handleClickInActiveContainer = () => {
		if (classContainer3 === 'active3') {
			setClassContainer3('');
		}

		if (classContainer3 === '') {
			setClassContainer2('');
		}

		if (classContainer2 === '') {
			setClassContainer('');
		}
	};

	return (
		<div className="work">
			<button onClick={handleClickActiveContainer} />
			<div className="containerOuter">
				<WorkContainer
					title={'Raport Game'}
					description={
						'A game of choosing whether the suspect is guilty or not. Created in pure JavaScript. It only works on the PC'
					}
					date={'January 2021'}
					isCodeOrWork={'work'}
					backgroundColor={'purple'}
					link={'https://materka11.github.io/Raport-Game/game.html'}
					classContainer={''}
				/>
				<WorkContainer
					title={'Clothing Store'}
					description={'Online store designed with React.'}
					date={'June 2022'}
					isCodeOrWork={'code'}
					backgroundColor={'white'}
					link={'https://github.com/Materka11/ClothingStore'}
					classContainer={classContainer}
				/>
				<WorkContainer
					title={'Clothing Store3'}
					description={'Online store designed with React.'}
					date={'June 2022'}
					isCodeOrWork={'code'}
					backgroundColor={'white'}
					link={'https://github.com/Materka11/ClothingStore'}
					classContainer={classContainer2}
				/>
				<WorkContainer
					title={'Clothing Store4'}
					description={'Online store designed with React.'}
					date={'June 2022'}
					isCodeOrWork={'code'}
					backgroundColor={'white'}
					link={'https://github.com/Materka11/ClothingStore'}
					classContainer={classContainer3}
				/>
			</div>
			<button onClick={handleClickInActiveContainer} />
		</div>
	);
}

export default Work;
