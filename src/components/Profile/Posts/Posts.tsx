import React, {ChangeEvent, RefObject} from 'react';
import {Post} from './Post/Post';
import {PostType} from '../../../redux/state';

type PostsType = {
	data: PostType[]
	addPost: () => void
	changeNewPostText: (newText: string) => void
	newPostText: string
}

export const Posts = (props: PostsType) => {

	const mappingPosts = props.data.map(p => <Post key={p.id} id={p.id} postTitle={p.postTitle} likesCount={p.likesCount}/>)


	let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

	const addPosts = () => {
		props.addPost()
	}

	let onChangeHandler = (event:ChangeEvent<HTMLTextAreaElement>) => {
		props.changeNewPostText(event.currentTarget.value)
	}


	return (
		<>
			<textarea value={props.newPostText} ref={newPostElement} onChange={onChangeHandler}/>
			<button onClick={ addPosts }>Add post</button>
			<div>
				my posts:
				<div>
					{mappingPosts}
				</div>
			</div>
		</>
	);
};

