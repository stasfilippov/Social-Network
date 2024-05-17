import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { userProfileDataType } from '../../api/profileApi'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { AppRootState } from '../../redux/redux-store'
import { Profile } from './Profile'
import {getStatusProfile, getUserProfileData, updateStatusProfileAsync} from '../../redux/profile-reducer';

export class ProfileContainerApi extends React.Component<PropsType> {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = '30577'
		}
		this.props.getUserProfileData(userId)
		this.props.getStatusProfile(userId)
	}

	render() {
		return <Profile
			profile={this.props.profile}
			status={this.props.status}
			updateStatus={this.props.updateStatusProfileAsync}
		/>
	}
}

let mapStateToProps = (state: AppRootState): mapStateToPropsType => {
	return {
		profile: state.profile.userProfileData,
		status: state.profile.statusProfile
	}
}

export default compose<React.ComponentType>(
	connect(mapStateToProps, { getUserProfileData, getStatusProfile, updateStatusProfileAsync }),
	withRouter,
	withAuthRedirect
)(ProfileContainerApi)

type mapStateToPropsType = {
	profile: userProfileDataType
	status: string
}
type mapDispatchToProps = {
	getUserProfileData: (userId: string) => void
	getStatusProfile: (userId: string) => void
	updateStatusProfileAsync: (status: string) => void
}
export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToProps
export type PathParamsType = {
	userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
