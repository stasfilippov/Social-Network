import React, {RefObject} from 'react';
import {Post} from './Post/Post';
import {PostType} from '../../../redux/state';

type PostsType = {
	data: PostType[]
}

export const Posts = (props: PostsType) => {

	const mappingPosts = props.data.map(p => <Post key={p.id} id={p.id} postTitle={p.postTitle} likesCount={p.likesCount}/>)

	const addPosts = () => {
		let text = newPostElement.current?.value
		alert(text)
	}

	let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

	return (
		<>
			<textarea ref={newPostElement}></textarea>
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

