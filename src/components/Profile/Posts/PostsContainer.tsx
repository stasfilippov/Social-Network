import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {Posts} from './Posts';
import {StoreType} from '../../../redux/store';

type PostsContainerType = {
	store: StoreType
}



export const PostsContainer:React.FC<PostsContainerType> = (props) => {

	let state = props.store.getState().profilePage

	const onPostChange = (text: string) => {
		props.store.dispatch(updateNewPostTextAC(text))
	}

	const addPost = () => {
		props.store.dispatch(addPostAC())
	}

	return <Posts data={state.postsData} newPostText={state.newPostText} updateNewPostText={onPostChange} addPost={addPost}/>
};

