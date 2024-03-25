import React from 'react';
import st from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsContainer} from './Posts/PostsContainer';
import {userProfileDataType} from './ProfileContainer';


type ProfileTypeProps = {
	profile: userProfileDataType
}
export const Profile:React.FC<ProfileTypeProps> = ( {profile} ) => {

	return (
		<div className={st.profilePageWrapper}>
			<div className={st.profileContainer}>
				<ProfileInfo profile={profile}/>
				<PostsContainer/>
			</div>
			<div className={st.messagesContainer}>
				messages
			</div>
		</div>
	);
};

