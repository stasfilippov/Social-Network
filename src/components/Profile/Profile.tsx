import React from 'react';
import st from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsContainer} from './Posts/PostsContainer';
import {ProfileContainerPropsType, userProfileDataType} from './ProfileContainer';


type ProfileTypeProps = {
	profile: userProfileDataType
}
export const Profile:React.FC<ProfileTypeProps> = ( {profile} ) => {

	return (
		<div className={st.profilePageWrapper}>
			<ProfileInfo profile={profile}/>
			<PostsContainer/>
		</div>
	);
};

