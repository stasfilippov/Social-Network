import {PostType} from './state';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const profileReducer = (state: any, action: any) => {
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