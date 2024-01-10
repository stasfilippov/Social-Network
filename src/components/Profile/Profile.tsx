import React from 'react';
import st from './Profile.module.css'
import {Posts} from './Posts/Posts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import { ProfilePageType,} from '../../redux/state';

type ProfileType = {
	state: ProfilePageType
	addPost: () => void
	changeNewPostText: (newText: string) => void
}

const Profile = (props: ProfileType) => {
	return (
		<div className={st.profilePageWrapper}>
			<ProfileInfo/>
			<Posts newPostText={props.state.newPostText} changeNewPostText={props.changeNewPostText} addPost={props.addPost} data={props.state.postsData}/>
		</div>
	)
}

export default Profile