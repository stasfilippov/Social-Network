import { ComponentType } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppRootState } from '../redux/redux-store'

let mapStateToPropsForRedirect = (
	state: AppRootState
): mapStateToPropsForRedirectType => {
	return {
		isAuth: state.auth.isAuth,
	}
}
export function withAuthRedirect<T>(Component: ComponentType<T>) {
	const RedirectComponent = (props: mapStateToPropsForRedirectType) => {
		let { isAuth, ...restProps } = props

		if (!isAuth) return <Redirect to={'/login'} />
		return <Component {...(restProps as T)} />
	}

	return connect(mapStateToPropsForRedirect)(RedirectComponent)
}

type mapStateToPropsForRedirectType = {
	isAuth: boolean
}
