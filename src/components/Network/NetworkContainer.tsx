import {connect} from 'react-redux';
import {AppRootState} from '../../redux/redux-store';
import {
	setPage,
	setTotalUsersCount,
	setUsers,
	toggleFollow,
	toggleIsFetching, toggleIsFollowingProgress,
	userType
} from '../../redux/network-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../../common/proloader/Preloader';
import {usersApi} from '../../api/usersApi';

class NetworkAPIContainer extends React.Component<NetworkPropsType>{
	componentDidMount() {
		this.props.toggleIsFetching(true)
		usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(data.items)
				this.props.setTotalUsersCount(data.totalCount)
			})
	}

	getCurrentUsersOnChangePage = (currentPage: number) => {
		this.props.setPage(currentPage)
		this.props.toggleIsFetching(true)
		usersApi.getUsers(currentPage, this.props.pageSize)
			.then(data => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(data.items)
			})
	}

	render() {
		return <>
			{this.props.isFetching? <Preloader/> : null}
			<Users
				usersFollowingInProgress = {this.props.usersFollowingInProgress}
			usersData={this.props.usersData}
			getCurrentUsersOnChangePage={this.getCurrentUsersOnChangePage}
			currentPage={this.props.currentPage}
			totalUsersCount={this.props.totalUsersCount}
			toggleFollowCallback={this.props.toggleFollow}
			toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
			pageSize={this.props.pageSize}
		/></>
	}

}

export default NetworkAPIContainer



type MapStateToPropsType = {
	usersData: userType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	usersFollowingInProgress: number[]
}

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
	return {
		usersData: state.network.users,
		pageSize: state.network.pageSize,
		totalUsersCount: state.network.totalUsersCount,
		currentPage: state.network.currentPage,
		isFetching: state.network.isFetching,
		usersFollowingInProgress: state.network.usersFollowingInProgress
	}
}

type MapDispatchToPropsType = {
	toggleFollow: (userId: number) => void
	setUsers: (users: userType[]) => void
	setPage: (currentPage: number) => void
	setTotalUsersCount: (totalUsersCount: number) => void
	toggleIsFetching: (isFetching: boolean) => void
	toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
}

export type NetworkPropsType = MapStateToPropsType & MapDispatchToPropsType

export const NetworkContainer = connect(mapStateToProps,
	{
		toggleFollow,
		setUsers,
		setPage,
		setTotalUsersCount,
		toggleIsFetching,
		toggleIsFollowingProgress
	})(NetworkAPIContainer)