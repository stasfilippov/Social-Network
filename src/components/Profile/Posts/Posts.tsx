import React, {ChangeEvent, RefObject} from 'react';
import {Post} from './Post/Post';
import {
	ActionDispatchType,
	addPostAC,
	PostType,
	updateNewPostTextAC
} from '../../../redux/state';

type PostsType = {
	data: PostType[]
	dispatch: (action: ActionDispatchType)=> void
	newPostText: string
}



export const Posts = (props: PostsType) => {

	const mappingPosts = props.data.map(p => <Post key={p.id} id={p.id} postTitle={p.postTitle} likesCount={p.likesCount}/>)


	let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

	const onClickHandler = () => {
		props.dispatch(addPostAC())
	}

	let onChangeHandler = (event:ChangeEvent<HTMLTextAreaElement>) => {
		props.dispatch(updateNewPostTextAC(event.currentTarget.value))
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

