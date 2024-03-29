import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppRootState} from '../../redux/redux-store';
import {getUserProfileData, setUserProfileData} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {profileApi, userProfileDataType} from '../../api/profileApi';



export class ProfileContainerApi extends React.Component<PropsType>{

	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = '2'
		}
		this.props.getUserProfileData(userId)
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
export const ProfileContainer = connect(mapStateToProps, {getUserProfileData})(withUrlDataContainerComponent)


type mapStateToPropsType = {
	profile: userProfileDataType
}
type mapDispatchToProps = {
	getUserProfileData: (userId: string) => void
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToProps

export type PathParamsType = {
	userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType



