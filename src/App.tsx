import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {NavbarContainer} from './components/Navbar/NavbarContainer';
import {NetworkContainer} from './components/Network/NetworkContainer';



const App: React.FC = props => {
	return (
		<BrowserRouter>
			<div className={'app-wrapper'}>
				<Header />
				<NavbarContainer/>
				<div className={'app-wrapper-content'}>
					<Route
						path={'/profile'}
						render={() => <Profile/>}
					/>
					<Route
						exact
						path={'/dialogs'}
						render={() => <DialogsContainer/>}
					/>
					<Route path={'/network'} render={() => <NetworkContainer/>}/>
					{/*<Route path={'/music'} component={Music}/>*/}
					{/*<Route path={'/settings'} component={Settings}/>*/}
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
