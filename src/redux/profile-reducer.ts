import {
	UnionActionDispatchType,
} from './store';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const addPostAC = () => {
	return {
		type: ADD_POST
	} as const
}
export const updateNewPostTextAC = (text: string) => {
	return {type: UPDATE_NEW_POST_TEXT, newText: text} as const
}

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
			state.postsData.push(newPost)
			state.newPostText = ''
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText
			return state;
		default:
			return state;
	}
}

