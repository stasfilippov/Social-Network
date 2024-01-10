import React, {ChangeEvent, RefObject} from 'react';
import {Post} from './Post/Post';
import {ActionDispatchType, PostType} from '../../../redux/state';

type PostsType = {
	data: PostType[]
	dispatch: (action: ActionDispatchType)=> void
	newPostText: string
}

export const Posts = (props: PostsType) => {

	const mappingPosts = props.data.map(p => <Post key={p.id} id={p.id} postTitle={p.postTitle} likesCount={p.likesCount}/>)


	let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

	const onClickHandler = () => {
		props.dispatch({type: 'ADD-POST'})
	}

	let onChangeHandler = (event:ChangeEvent<HTMLTextAreaElement>) => {
		props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: event.currentTarget.value})
	}


	return (
		<>
			<textarea value={props.newPostText} ref={newPostElement} onChange={onChangeHandler}/>
			<button onClick={ onClickHandler }>Add post</button>
			<div>
				my posts:
				<div>
					{mappingPosts}
				</div>
			</div>
		</>
	);
};

