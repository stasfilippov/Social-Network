import {
	AddPostActionType,
	PostType,
	ProfilePageType,
	UnionActionDispatchType,
	UpdateNewPostTextActionType
} from './state';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const addPostAC = (): AddPostActionType => {
	return {
		type: ADD_POST
	}
}
export const updateNewPostTextAC = (text: string): UpdateNewPostTextActionType => {
	return {type: UPDATE_NEW_POST_TEXT, newText: text}

}
const profileReducer = (state: ProfilePageType, action: UnionActionDispatchType) => {
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

export default profileReducer;