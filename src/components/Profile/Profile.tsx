import React from 'react';
import st from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsContainer} from './Posts/PostsContainer';


const Profile: React.FC = () => {
	return (
		<div className={st.profilePageWrapper}>
			<ProfileInfo/>
			<PostsContainer/>
		</div>
	)
}

export default Profile