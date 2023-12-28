import React from 'react';
import './Profile.module.css'
import {Posts} from './Posts/Posts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import { ProfilePageType,} from '../../redux/state';

type ProfileType = {
	state: ProfilePageType
}

const Profile = (props: ProfileType) => {
	return (
		<div>
			<ProfileInfo/>
			<Posts data={props.state.postsData}/>
		</div>
	)
}

export default Profile