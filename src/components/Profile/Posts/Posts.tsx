import React from 'react';
import {Post} from './Post/Post';

export const Posts = () => {
	return (
		<>
			<textarea></textarea>
			<button>Add post</button>
			<div>
				my posts:
				<div>
					<Post title={'Hi how are you?'} count={14}/>
					<Post title={'Yo i am very happy'} count={10}/>
				</div>
			</div>
		</>
	);
};

