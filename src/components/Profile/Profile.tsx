import React from 'react';
import './Profile.module.css'
import {Posts} from './Posts/Posts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostType} from '../../index';

export type PostsType = {
	postsData: PostType[]
}

const Profile = (props: PostsType) => {

	return (
		<div>
			<ProfileInfo/>
			<Posts postsData={props.postsData}/>
		</div>
	)
}

export default Profile