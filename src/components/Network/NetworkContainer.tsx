import {connect} from 'react-redux';
import {AppRootState} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {
	setPage,
	setTotalUsersCount,
	setUsers,
	toggleFollow,
	toggleIsFetching,
	userType
} from '../../redux/network-reducer';
import React from 'react';
import axios from 'axios';
import Users from './Users';
import preloader from '../../images/preloader.svg'
import Preloader from '../../common/proloader/Preloader';



type ResponseType = {
	items: userType []
	totalCount: number
	error: string
}
class NetworkAPIContainer extends React.Component<NetworkPropsType>{
	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(res => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(res.data.items)
				this.props.setTotalUsersCount(res.data.totalCount)
			})
	}

	getCurrentUsersOnChangePage = (currentPage: number) => {
		this.props.setPage(currentPage)
		this.props.toggleIsFetching(true)
		axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users/?page=${currentPage}&count=${this.props.pageSize}`)
			.then(res => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(res.data.items)
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