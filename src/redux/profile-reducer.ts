import {AppDispatch, AppThunk, UnionActionDispatchType} from './redux-store';
import {profileApi, userProfileDataType} from '../api/profileApi';
import {NetworkUnionActionDispatchType} from './network-reducer';


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE_DATA = 'SET_USER_DATA_PROFILE_DATA'
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE'




export type PostType = {
	postTitle: string
	likesCount: number
	id: number
}

let initialState = {
	postsData: [
		{ id: 1, postTitle: 'Hi how are you?', likesCount: 14 },
		{ id: 2, postTitle: 'Yo i am very happy', likesCount: 10 },
		{ id: 3, postTitle: 'Yo i am very happy', likesCount: 10 },
		{ id: 4, postTitle: 'Yo i', likesCount: 10 },
	] as PostType[],
	newPostText: '',
	userProfileData: {} as userProfileDataType,
	statusProfile: ''
}

export type InitialStateType = typeof initialState
export const profileReducer = (state: InitialStateType = initialState, action: UnionActionDispatchType):InitialStateType => {
	switch (action.type) {
		case ADD_POST:
			const newPost: PostType = {
				id: 5,
				postTitle: state.newPostText,
				likesCount: 0
			}
			return {
				...state,
				postsData: [
					...state.postsData,
					newPost
				],
				newPostText: ''
			}
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			}
		case SET_USER_PROFILE_DATA:
			return {...state, userProfileData: action.profileData}
		case SET_STATUS_PROFILE:
			return {...state, statusProfile: action.status}
		default:
			return state;
	}
}



export const addPost = () => {
	return {
		type: ADD_POST
	} as const
}
export const updateNewPostText = (text: string) => {
	return {type: UPDATE_NEW_POST_TEXT, newText: text} as const
}

export const setUserProfileData = (profileData: userProfileDataType) => ( {type: SET_USER_PROFILE_DATA, profileData} as const )
export const setStatusProfile = (status: string) => ( {type: SET_STATUS_PROFILE, status} as const )


//thunks

export const getUserProfileData = (userId: string): AppThunk => (dispatch: AppDispatch) => {
	profileApi.getUserProfileData(userId).then(data => {
		dispatch(setUserProfileData(data))
	})
}

export const getStatusProfile = (userId: string): AppThunk => (dispatch: AppDispatch) => {
	profileApi.getProfileStatus(userId).then(data => {
		dispatch(setStatusProfile(data))
	})
}

export const updateStatusProfileAsync = (status: string): AppThunk => (dispatch: AppDispatch) => {
	profileApi.updataProfileStatus (status).then(data => {
		if (data.resultCode === 0) {
			dispatch(setStatusProfile(status))
		}
	})
}

export type AddPostActionType = ReturnType<typeof addPost>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostText>
export type SetUserProfileDataActionType = ReturnType<typeof setUserProfileData>
export type SetStatusProfileActionType = ReturnType<typeof setStatusProfile>


export type ProfileUnionActionDispatchType = AddPostActionType
	| UpdateNewPostTextActionType
	| SetUserProfileDataActionType
	| SetStatusProfileActionType
