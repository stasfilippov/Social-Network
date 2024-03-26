import {UnionActionDispatchType} from './redux-store';


const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


export type userType = {
	name: string,
	id: number,
	uniqueUrlName: string | null,
	photos: {
		small: string | null,
		large: string | null
	},
	status: string,
	followed: boolean
}

export type InitialStateType = {
	users: userType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	usersFollowingInProgress: number[]
}

let initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	usersFollowingInProgress: []
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
				users: [...action.users]
			}
		}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.currentPage
			}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {
				...state,
				totalUsersCount: action.totalUsersCount
			}
		}
		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching}
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {...state,
				usersFollowingInProgress: action.isFetching
					? [...state.usersFollowingInProgress, action.userId]
					: state.usersFollowingInProgress.filter(id => id !== action.userId)
				}

		default:
			return state
	}
}

export type ToggleFollowActionType = ReturnType<typeof toggleFollow>
export type UsersActionType = ReturnType<typeof setUsers>
export type SetPageActionType = ReturnType<typeof setPage>
export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export type ToggleIsFollowingProgressActionType = ReturnType<typeof toggleIsFollowingProgress>

export const toggleFollow = (userId: number) => {
	return  {type: TOGGLE_FOLLOW, userId} as const
}
export const setUsers = (users: userType[]) => {
	return  {type: SET_USERS, users} as const
}
export const setPage = (currentPage: number) => {
	return  {type: SET_CURRENT_PAGE, currentPage} as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
	return  {type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching} as const)

export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
	return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } as const
}