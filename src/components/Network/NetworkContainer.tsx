import {connect} from 'react-redux';
import {AppRootState} from '../../redux/redux-store';
import {
	setPage,
	setTotalUsersCount,
	setUsers,
	toggleFollow,
	toggleIsFetching,
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
			usersData={this.props.usersData}
			getCurrentUsersOnChangePage={this.getCurrentUsersOnChangePage}
			currentPage={this.props.currentPage}
			totalUsersCount={this.props.totalUsersCount}
			callBack={this.props.toggleFollow}
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
}

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
	return {
		usersData: state.network.users,
		pageSize: state.network.pageSize,
		totalUsersCount: state.network.totalUsersCount,
		currentPage: state.network.currentPage,
		isFetching: state.network.isFetching
	}
}

type MapDispatchToPropsType = {
	toggleFollow: (userId: number) => void
	setUsers: (users: userType[]) => void
	setPage: (currentPage: number) => void
	setTotalUsersCount: (totalUsersCount: number) => void
	toggleIsFetching: (isFetching: boolean) => void
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
// 	return {
// 		toggleFollow: (userId: number) => {
// 			dispatch(toggleFollow(userId))
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsers(users))
// 		},
// 		setPage: (currentPage) => {
// 			dispatch(setPage(currentPage))
// 		},
// 		setTotalUsersCount: (totalUsersCount) => {
// 			dispatch(setTotalUsersCount(totalUsersCount))
// 		},
// 		toggleIsFetching: (isFetching) => {
// 			dispatch(toggleIsFetching(isFetching))
// 		}
// 	}
// }

export type NetworkPropsType = MapStateToPropsType & MapDispatchToPropsType

export const NetworkContainer = connect(mapStateToProps,
	{
		toggleFollow,
		setUsers,
		setPage,
		setTotalUsersCount,
		toggleIsFetching
	})(NetworkAPIContainer)