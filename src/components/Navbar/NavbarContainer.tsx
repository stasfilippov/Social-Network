import React from 'react';
import Navbar from './Navbar';
import {connect} from 'react-redux';
import {AppRootState} from '../../redux/redux-store';

const mapStateToProps = (state: AppRootState) => {
	return {
		menuDate: state.sidebar.navbarData,
		friendsData: state.sidebar.friendsData
	}
}

export const NavbarContainer = connect(mapStateToProps)(Navbar)
