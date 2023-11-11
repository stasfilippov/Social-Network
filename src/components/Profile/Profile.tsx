import React from 'react';
import './Profile.module.css'
import classes from './ProfileInfo.module.css';
import {Posts} from './Posts/Posts';
import {ProfileInfo} from './Posts/ProfileInfo/ProfileInfo';

const Profile = () => {
	return (
		<div>
			<ProfileInfo/>
			<Posts/>
		</div>
	)
}

export default Profile