import React from 'react';
import st from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsContainer} from './Posts/PostsContainer';
import {userProfileDataType} from '../../api/profileApi';


type ProfileTypeProps = {
	profile: userProfileDataType
	status: string
	updateStatus: (status: string) => void
}
export const Profile:React.FC<ProfileTypeProps> = ( {profile, status, updateStatus} ) => {

	return (
		<div className={st.profilePageWrapper}>
			<div className={st.profileContainer}>
				<ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
				<PostsContainer/>
			</div>
			<div className={st.messagesContainer}>
				messages
			</div>
		</div>
	);
};

