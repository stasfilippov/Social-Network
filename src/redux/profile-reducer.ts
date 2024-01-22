import {UnionActionDispatchType} from './redux-store';


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'



export type PostType = {
	postTitle: string
	likesCount: number
	id: number
}
export type ProfilePageType = {
	postsData: PostType[]
	newPostText: string
}

let initialState: ProfilePageType = {
	postsData: [
		{ id: 1, postTitle: 'Hi how are you?', likesCount: 14 },
		{ id: 2, postTitle: 'Yo i am very happy', likesCount: 10 },
		{ id: 3, postTitle: 'Yo i am very happy', likesCount: 10 },
		{ id: 4, postTitle: 'Yo i', likesCount: 10 },
	],
	newPostText: ''
}
export const profileReducer = (state = initialState, action: UnionActionDispatchType) => {
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
		default:
			return state;
	}
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

export const addPostAC = () => {
	return {
		type: ADD_POST
	} as const
}
export const updateNewPostTextAC = (text: string) => {
	return {type: UPDATE_NEW_POST_TEXT, newText: text} as const
}