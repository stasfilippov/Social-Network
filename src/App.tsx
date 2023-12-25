import React, {FC} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {DataType} from './redux/state';

type AppPropsType = {
	state: DataType
}

const App:React.FC<AppPropsType> = (props) => {

	const {postsData} = props.state
	const {dialogsData} = props.state
	const {messagesData} = props.state

	return (
		<BrowserRouter>
			<div className={'app-wrapper'}>
				<Header/>
				<Navbar/>
				<div className={'app-wrapper-content'}>
					<Route path={'/profile'} render={() => <Profile postsData={postsData}/>}/>
					<Route exact path={'/dialogs'} render={() => <Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
					<Route path={'/news'} component={News}/>
					<Route path={'/music'} component={Music}/>
					<Route path={'/settings'} component={Settings}/>
				</div>
			</div>
		</BrowserRouter>
	)
}


export default App;