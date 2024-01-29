import Navbar from './Navbar';
import {connect} from 'react-redux';
import {AppRootState} from '../../redux/redux-store';
import {FriendType, MenuType} from '../../redux/sidebar-reducer';

type MapStateToPropsType = {
	menuDate: MenuType[]
	friendsData: FriendType[]
}

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
	return {
		menuDate: state.sidebar.navbarData,
		friendsData: state.sidebar.friendsData
	}
}

export type NavbarPropsType = MapStateToPropsType
export const NavbarContainer = connect(mapStateToProps)(Navbar)
