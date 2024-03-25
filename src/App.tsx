import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {NavbarContainer} from './components/Navbar/NavbarContainer';
import {NetworkContainer} from './components/Network/NetworkContainer';
import {ProfileContainer} from './components/Profile/ProfileContainer';
import {ProfileInfo} from './components/Profile/ProfileInfo/ProfileInfo';
import {HeaderContainer, HeaderContainerApi} from './components/Header/HeaderContainerApi';



const App: React.FC = props => {
	return (
		<BrowserRouter>
			<div className={'app-wrapper'}>
				<HeaderContainer/>
				<NavbarContainer/>
				<div className={'app-wrapper-content'}>
					<Route
						path={'/profile/:userId?'}
						render={() => <ProfileContainer/>}
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
