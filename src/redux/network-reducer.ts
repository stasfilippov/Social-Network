import {UnionActionDispatchType} from './redux-store';


const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'


export type userType = {
	id: number
	profileImg: string
	firstName: string
	secondName: string
	profession: string
	followed: boolean
}



let initialState = {
	users: []
}

export type InitialStateType = {
	users: userType[]
}
export const networkReducer = (state: InitialStateType = initialState, action: UnionActionDispatchType): InitialStateType => {
	switch (action.type) {
		case TOGGLE_FOLLOW: {
			return {
				...state,
				users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
			}
		}
		case SET_USERS: {
			return {...state,
				users: [...state.users, ...action.users]
			}
		}

		default:
			return state
	}
}

export type ToggleFollowActionType = ReturnType<typeof toggleFollowAC>
export type UsersActionType = ReturnType<typeof setUsersAC>

export const toggleFollowAC = (userId: number) => {
	return  {type: TOGGLE_FOLLOW, userId} as const
}
export const setUsersAC = (users: userType[]) => {
	return  {type: SET_USERS, users} as const
}