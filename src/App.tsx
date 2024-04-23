import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import { HeaderContainer } from './components/Header/HeaderContainerApi'
import { Login } from './components/Login/Login'
import { NavbarContainer } from './components/Navbar/NavbarContainer'
import { NetworkContainer } from './components/Network/NetworkContainer'
import ProfileContainer from './components/Profile/ProfileContainer'

const App: React.FC = props => {
	return (
		<BrowserRouter>
			<div className={'app-wrapper'}>
				<HeaderContainer />
				<NavbarContainer />
				<div className={'app-wrapper-content'}>
					<Route
						path={'/profile/:userId?'}
						render={() => <ProfileContainer />}
					/>
					<Route exact path={'/dialogs'} render={() => <DialogsContainer />} />
					<Route path={'/network'} render={() => <NetworkContainer />} />
					<Route path={'/login'} render={() => <Login />} />
					{/*<Route path={'/settings'} component={Settings}/>*/}
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
