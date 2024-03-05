import {connect} from 'react-redux';
import {AppRootState} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {setPageAC, setTotalUsersCount, setUsersAC, toggleFollowAC, userType} from '../../redux/network-reducer';
import React from 'react';
import axios from 'axios';
import Users from './Users';



type ResponseType = {
	items: userType []
	totalCount: number
	error: string
}
class NetworkAPIContainer extends React.Component<NetworkPropsType>{
	componentDidMount() {
		axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(res => {
				this.props.setUsers(res.data.items)
				this.props.setTotalUsersCount(res.data.totalCount)
			})
	}

	getCurrentUsersOnChangePage = (currentPage: number) => {
		this.props.setCurrentPage(currentPage)
		axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users/?page=${currentPage}&count=${this.props.pageSize}`)
			.then(res => {
				this.props.setUsers(res.data.items)
			})
	}

	render() {
		return <Users
			usersData={this.props.usersData}
			getCurrentUsersOnChangePage={this.getCurrentUsersOnChangePage}
			currentPage={this.props.currentPage}
			totalUsersCount={this.props.totalUsersCount}
			callBack={this.props.callBack}
			pageSize={this.props.pageSize}
		/>
	}

}

export default NetworkAPIContainer



type MapStateToPropsType = {
	usersData: userType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
}

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
	return {
		usersData: state.network.users,
		pageSize: state.network.pageSize,
		totalUsersCount: state.network.totalUsersCount,
		currentPage: state.network.currentPage
	}
}

type MapDispatchToPropsType = {
	callBack: (userId: number) => void
	setUsers: (users: userType[]) => void
	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalUsersCount: number) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
	return {
		callBack: (userId: number) => {
			dispatch(toggleFollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (currentPage) => {
			dispatch(setPageAC(currentPage))
		},
		setTotalUsersCount: (totalUsersCount) => {
			dispatch(setTotalUsersCount(totalUsersCount))
		}
	}
}

export type NetworkPropsType = MapStateToPropsType & MapDispatchToPropsType

export const NetworkContainer = connect(mapStateToProps, mapDispatchToProps)(NetworkAPIContainer)