import React from 'react';
import {Post} from './Post/Post';
import {PostType} from '../../../redux/state';

type PostsType = {
	data: PostType[]
}

export const Posts = (props: PostsType) => {

	const mappingPosts = props.data.map(p => <Post key={p.id} id={p.id} postTitle={p.postTitle} likesCount={p.likesCount}/>)

	return (
		<>
			<textarea></textarea>
			<button>Add post</button>
			<div>
				my posts:
				<div>
					{mappingPosts}
				</div>
			</div>
		</>
	);
};

