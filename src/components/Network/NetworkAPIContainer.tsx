import React from 'react';
import axios from 'axios';
import {userType} from '../../redux/network-reducer';
import {NetworkPropsType} from './NetworkContainer';
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

