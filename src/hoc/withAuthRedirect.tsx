import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {AppRootState} from '../redux/redux-store';
import {connect} from 'react-redux';



let mapStateToPropsForRedirect = (state: AppRootState ): mapStateToPropsForRedirectType => {
	return {
		isAuth: state.auth.isAuth
	}
}
export function withAuthRedirect <T>(Component: ComponentType<T>)  {

	const RedirectComponent = (props: mapStateToPropsForRedirectType) => {

		let {isAuth, ...restProps} = props

		if (!isAuth) return <Redirect to={'/login'}/>
		return <Component {...restProps as T}/>
	}

	return connect(mapStateToPropsForRedirect)(RedirectComponent)
}

type mapStateToPropsForRedirectType = {
	isAuth: boolean
}
