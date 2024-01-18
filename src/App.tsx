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
import {UnionActionDispatchType, RootStateType, StoreType} from './redux/store'
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

type AppPropsType = {
	store: StoreType
	dispatch: (action: UnionActionDispatchType)=> void
}

const App: React.FC<AppPropsType> = props => {
	return (
		<BrowserRouter>
			<div className={'app-wrapper'}>
				<Header />
				<Navbar
					menuDate={props.store.getState().sidebar.navbarData}
					friendsData={props.store.getState().sidebar.friendsData}
				/>
				<div className={'app-wrapper-content'}>
					<Route
						path={'/profile'}
						render={() => <Profile store={props.store} />}
					/>
					<Route
						exact
						path={'/dialogs'}
						render={() => <DialogsContainer store={props.store}/>}
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
