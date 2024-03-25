import logo from '../../images/logo.png'
import st from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {ReactComponent} from '*.svg';
import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {AuthDataUserType, InitialStateType, setAuthDataUser} from '../../redux/auth-reducer';
import {AppRootState} from '../../redux/redux-store';
import {userProfileDataType} from '../Profile/ProfileContainer';

export class HeaderContainerApi extends React.Component<HeaderPropsType> {
	componentDidMount() {
		axios.get<ResponseAuthMe>('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
			.then(res => {
				if (res.data.resultCode === 0) {
					this.props.setAuthDataUser(res.data)
				}
			})
	}

	render() {
		return <Header {...this.props} />;
	}
}

const mapStateToProps = (state:AppRootState): MapStateToPropsType=> {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login
	}
}
export const HeaderContainer = connect(mapStateToProps, {setAuthDataUser})(HeaderContainerApi)

export type AuthUserData = {
	id: number
	email: string
	login: string
}

type ResponseAuthMe = {
	resultCode: number
	messages: string[]
	data: AuthUserData
}
type MapStateToPropsType = {
	isAuth: boolean
	login: string | null
}

type mapDispatchToProps = {
	setAuthDataUser: (data: AuthDataUserType) => void
}

export type HeaderPropsType = MapStateToPropsType & mapDispatchToProps