import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {AuthDataUserType, setAuth, setAuthDataUser} from '../../redux/auth-reducer';
import {AppRootState} from '../../redux/redux-store';
import {authApi} from '../../api/authApi';

export class HeaderContainerApi extends React.Component<HeaderPropsType> {
	componentDidMount() {
		this.props.setAuth()
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
export const HeaderContainer = connect(mapStateToProps, {setAuth})(HeaderContainerApi)


type MapStateToPropsType = {
	isAuth: boolean
	login: string | null
}

type mapDispatchToProps = {
	setAuth: () => void
}

export type HeaderPropsType = MapStateToPropsType & mapDispatchToProps