import React from 'react';
import st from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className={st.nav}>
			<div className={st.item}>
				<NavLink activeClassName={st.active} to="/profile">Profile</NavLink>
			</div>
			<div className={st.item}>
				<NavLink activeClassName={st.active} to="/dialogs">Messages</NavLink>
			</div>
			<div className={st.item}>
				<NavLink activeClassName={st.active} to="/news">News</NavLink>
			</div>
			<div className={st.item}>
				<NavLink activeClassName={st.active} to="/music">Music</NavLink>
			</div>
			<div className={st.item}>
				<NavLink activeClassName={st.active} to={"/settings"}>Settings</NavLink>
			</div>
		</nav>
	)
}

export default Navbar