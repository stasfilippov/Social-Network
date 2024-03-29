import {authApi, AuthUserData} from '../api/authApi';
import {Dispatch} from 'redux';
import {AppDispatch, AppThunk} from './redux-store';

const SET_AUTH_DATA_USER = 'SET_AUTH_DATA_USER'

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false
}

export type InitialStateType = {
	id: number | null
	email: string | null
	login: string | null
	isAuth: boolean
}
export const authReducer = (state: InitialStateType = initialState, action: AuthUnionActionDispatchType):InitialStateType => {
	switch (action.type) {
		case 'SET_AUTH_DATA_USER':
			return {
				...state,
				...action.data.data,
				isAuth: true
			}

		default:
			return state;
	}
}

export const setAuthDataUser = (data: AuthDataUserType) => ({ type: SET_AUTH_DATA_USER, data } as const)


//tunks
export const setAuth = ():AppThunk => (dispatch: AppDispatch) => {
	authApi.authMe().then(data => {
		if (data.resultCode === 0) {
			dispatch(setAuthDataUser(data))
		}
	})
}

type SetAuthDataUser = ReturnType<typeof setAuthDataUser>

export type AuthDataUserType = {
	data: AuthUserData
}
export type AuthUnionActionDispatchType = SetAuthDataUser

