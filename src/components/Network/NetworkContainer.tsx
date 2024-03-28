import {connect, useDispatch} from 'react-redux';
import {AppRootState} from '../../redux/redux-store';
import {
	setPage,
	getUsers,
	toggleFollow,
	toggleIsFollowingProgress,
	userType
} from '../../redux/network-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../../common/proloader/Preloader';
import {usersApi} from '../../api/usersApi';
import {Dispatch} from 'redux';

class NetworkAPIContainer extends React.Component<NetworkPropsType>{
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	getCurrentUsersOnChangePage = (currentPage: number) => {
		this.props.setPage(currentPage)
		this.props.getUsers(currentPage, this.props.pageSize)
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
	setPage: (currentPage: number) => void
	toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
	getUsers: (currentPage: number, pageSize: number) => void
}

export type NetworkPropsType = MapStateToPropsType & MapDispatchToPropsType

export const NetworkContainer = connect(mapStateToProps,
	{
		toggleFollow,
		setPage,
		toggleIsFollowingProgress,
		getUsers
	})(NetworkAPIContainer)