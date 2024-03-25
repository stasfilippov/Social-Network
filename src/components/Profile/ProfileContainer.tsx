import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppRootState} from '../../redux/redux-store';
import {setUserProfileData} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';



export class ProfileContainerApi extends React.Component<PropsType>{

	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = '2'
		}
		axios.get<userProfileDataType>(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
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

let withUrlDataContainerComponent = withRouter(ProfileContainerApi)
export const ProfileContainer = connect(mapStateToProps, {setUserProfileData})(withUrlDataContainerComponent)


type mapStateToPropsType = {
	profile: userProfileDataType
}
type mapDispatchToProps = {
	setUserProfileData: (profileData: userProfileDataType) => void
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToProps

export type PathParamsType = {
	userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

export type userProfileDataType = {
	aboutMe: string;
	contacts: Contacts;
	lookingForAJob: boolean;
	lookingForAJobDescription: string;
	fullName: string;
	userId: number;
	photos: Photos;
}
export type Contacts = {
	facebook: string
	website: string
	vk: string
	twitter: string
	instagram: string
	youtube: string
	github: string
	mainLink: string
}
export type Photos = {
	small: string
	large: string
}

