import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { userProfileDataType } from '../../api/profileApi'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { getUserProfileData } from '../../redux/profile-reducer'
import { AppRootState } from '../../redux/redux-store'
import { Profile } from './Profile'

export class ProfileContainerApi extends React.Component<PropsType> {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = '2'
		}
		this.props.getUserProfileData(userId)
	}

	render() {
		return <Profile profile={this.props.profile} />
	}
}

let mapStateToProps = (state: AppRootState): mapStateToPropsType => {
	return {
		profile: state.profile.userProfileData,
	}
}

export default compose<React.ComponentType>(
	connect(mapStateToProps, { getUserProfileData }),
	withRouter,
	withAuthRedirect
)(ProfileContainerApi)

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
