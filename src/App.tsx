import React, { useState } from 'react';
import Header from './components/Header';

function App() {
	const [ classNoScroll, setClassNoScroll ] = useState('');

	return (
		<div className={`App ${classNoScroll}`}>
			<Header setClassNoScroll={setClassNoScroll} />
		</div>
	);
}

export default App;
