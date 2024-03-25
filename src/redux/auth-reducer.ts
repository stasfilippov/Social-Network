import {AuthUserData} from '../components/Header/HeaderContainerApi';

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
export const authReducer = (state: InitialStateType = initialState, action: UnionActionDispatchType):InitialStateType => {
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

type SetAuthDataUser = ReturnType<typeof setAuthDataUser>

export type AuthDataUserType = {
	data: AuthUserData
}
export type UnionActionDispatchType = SetAuthDataUser

