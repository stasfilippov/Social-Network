import React from 'react';
import st from './Profile.module.css'
import {Posts} from './Posts/Posts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {UnionActionDispatchType, ProfilePageType, StoreType,} from '../../redux/store';
import {PostsContainer} from './Posts/PostsContainer';

type ProfileType = {
	store: StoreType
}

const Profile: React.FC<ProfileType> = (props) => {
	return (
		<div className={st.profilePageWrapper}>
			<ProfileInfo/>
			<PostsContainer store={props.store} />
			{/*newPostText={props.state.newPostText} dispatch={props.dispatch} data={props.state.postsData}*/}
		</div>
	)
}

export default Profile