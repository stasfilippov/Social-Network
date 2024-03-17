import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppRootState} from '../../redux/redux-store';
import {setUserProfileData} from '../../redux/profile-reducer';



export class ProfileContainerApi extends React.Component<ProfileContainerPropsType>{

	componentDidMount() {
		axios.get<userProfileDataType>(`https://social-network.samuraijs.com/api/1.0/profile/13`)
			.then(res => {
				this.props.setUserProfileData(res.data)
			})
	}

	render () {
		return <Profile profile={this.props.profile} />
	}
}

let mapStateToProps = (state: AppRootState ): mapStateToPropsType => {
	return {
		profile: state.profile.userProfileData
	}
}
export const ProfileContainer = connect(mapStateToProps, {setUserProfileData})(ProfileContainerApi)


type mapStateToPropsType = {
	profile: userProfileDataType
}
type mapDispatchToProps = {
	setUserProfileData: (profileData: userProfileDataType) => void
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToProps

export type userProfileDataType = {
	aboutMe: string | null;
	contacts: Contacts;
	lookingForAJob: boolean;
	lookingForAJobDescription: string | null;
	fullName: string;
	userId: number;
	photos: Photos;
}
export type Contacts = {
	facebook: string | null;
	website: string | null;
	vk: string | null;
	twitter: string | null;
	instagram: string | null;
	youtube: string | null;
	github: string | null;
	mainLink: string | null;
}
export type Photos = {
	small: string | null;
	large: string | null
}

