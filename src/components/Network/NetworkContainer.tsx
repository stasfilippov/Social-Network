
import {connect} from 'react-redux';
import {AppRootState} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {Network} from './Network';
import {setUsersAC, toggleFollowAC, userType} from '../../redux/network-reducer';


type MapStateToPropsType = {
	usersData: userType[]
}

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
	return {
		usersData: state.network.users
	}
}

type MapDispatchToPropsType = {
	callBack: (userId: number) => void
	setUsers: (users: userType[]) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
	return {
		callBack: (userId: number) => {
			dispatch(toggleFollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		}
	}
}

export type NetworkPropsType = MapStateToPropsType & MapDispatchToPropsType

export const NetworkContainer = connect(mapStateToProps, mapDispatchToProps)(Network)