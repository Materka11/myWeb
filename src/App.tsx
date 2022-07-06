import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import Header from './components/Header';

function App() {
	const [ classNoScroll, setClassNoScroll ] = useState('');

	return (
		<div className={`App ${classNoScroll}`}>
			<Header setClassNoScroll={setClassNoScroll} />
			<AboutMe />
		</div>
	);
}

export default App;
