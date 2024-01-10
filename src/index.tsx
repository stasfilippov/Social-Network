import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changeNewPostText, state, StateType, subscribe} from './redux/state';

export let rerenderEntireTree = (state: StateType) => {
	ReactDOM.render(
		<App state={state} addPost={addPost} changeNewPostText={changeNewPostText}/>,
		document.getElementById('root')
	);
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)