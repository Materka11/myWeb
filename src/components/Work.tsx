import React from 'react';

import '../styles/work.css';
import WorkContainer from './WorkContainer';

function Work() {
	return (
		<div className="work">
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
				/>
				<WorkContainer
					title={'Clothing Store'}
					description={'Online store designed with React.'}
					date={'June 2022'}
					isCodeOrWork={'code'}
					backgroundColor={'white'}
					link={'https://github.com/Materka11/ClothingStore'}
				/>
			</div>
		</div>
	);
}

export default Work;
