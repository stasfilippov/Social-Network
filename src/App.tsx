import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import { Dialogs } from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
// import {News} from './components/News/News';
// import {Music} from './components/Music/Music';
// import {Settings} from './components/Settings/Settings';
import {UnionActionDispatchType, StateType} from './redux/state'

type AppPropsType = {
	state: StateType
	dispatch: (action: UnionActionDispatchType)=> void
}

const App: React.FC<AppPropsType> = props => {
	return (
		<BrowserRouter>
			<div className={'app-wrapper'}>
				<Header />
				<Navbar
					menuDate={props.state.navbarData}
					friendsData={props.state.friendsData}
				/>
				<div className={'app-wrapper-content'}>
					<Route
						path={'/profile'}
						render={() => <Profile dispatch={props.dispatch} state={props.state.profilePage} />}
					/>
					<Route
						exact
						path={'/dialogs'}
						render={() => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} />}
					/>
					{/*<Route path={'/news'} component={News}/>*/}
					{/*<Route path={'/music'} component={Music}/>*/}
					{/*<Route path={'/settings'} component={Settings}/>*/}
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
