import {connect} from 'react-redux';
import {AppRootState} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {setPageAC, setTotalUsersCount, setUsersAC, toggleFollowAC, userType} from '../../redux/network-reducer';
import NetworkAPIContainer from './NetworkAPIContainer';


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