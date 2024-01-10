import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, StateType} from './redux/state';

export let rerenderEntireTree = (state: StateType) => {
	ReactDOM.render(
		<App state={store.getState()} dispatch={store.dispatch.bind(store)}/>,
		document.getElementById('root')
	);
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)