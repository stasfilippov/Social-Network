import React from 'react';
import st from './Profile.module.css'
import {Posts} from './Posts/Posts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionDispatchType, ProfilePageType,} from '../../redux/state';

type ProfileType = {
	state: ProfilePageType
	dispatch: (action: ActionDispatchType)=> void
}

const Profile = (props: ProfileType) => {
	return (
		<div className={st.profilePageWrapper}>
			<ProfileInfo/>
			<Posts newPostText={props.state.newPostText} dispatch={props.dispatch} data={props.state.postsData}/>
		</div>
	)
}

export default Profile