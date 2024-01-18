import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {store} from './redux/redux-store';
import {store} from './redux/store';
import {RootStateType} from './redux/store';

export let rerenderEntireTree = (state: RootStateType) => {
	ReactDOM.render(
		<App store={store} dispatch={store.dispatch.bind(store)}/>,
		document.getElementById('root')
	);
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
	rerenderEntireTree(store.getState())
})

