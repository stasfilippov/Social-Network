import React from 'react';
import './App.css';

const App = () => {
	return (
		<div className={'App'}>
			<Header/>
			<Technologies/>
		</div>
	)
}

const Header = () => {
	return (
		<div>
			<a href="#">Profile</a>
			<a href="#">News Feed</a>
			<a href="#">Message</a>
		</div>
	)
}

const Technologies = () => {
	return (
		<div>
			<ul>
				<li>css</li>
				<li>html</li>
				<li>js</li>
				<li>react</li>
			</ul>
		</div>
	)
}
export default App;