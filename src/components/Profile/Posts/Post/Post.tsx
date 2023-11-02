import React from 'react';
import classes from './Post.module.css';

type PostPropsType = {
	title: string
	count: number
}
export const Post = (props: PostPropsType) => {
	return (
		<div>
			<img className={classes.img}
			     src="https://i.pinimg.com/originals/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg"
			     alt="ava"/>
			<span className={classes.item}>{props.title}</span>
			<span className={classes.likes}>Likes count: {props.count}</span>
			<button>like</button>
			<button>dislike</button>
		</div>
	);
};

