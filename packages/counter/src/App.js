import React, { useState } from 'react';
import './App.css';

const App = () => {
	const [counter, setCounter] = useState(0);

	const handleDecrement = () => {
		if (counter > 0) {
			setCounter(counter - 1);
		}
	};
	const handeIncrement = () => {
		setCounter(counter + 1);
	};

	return (
		<div className="app">
			<div className="counter">
				<h1>Counter: {counter}</h1>
				<button onClick={handeIncrement}>Increment</button>
				<button onClick={handleDecrement}>Decrement</button>
			</div>
		</div>
	);
};

export default App;
