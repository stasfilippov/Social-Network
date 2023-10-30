import React from 'react';
import st from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={st.nav}>
			<div className={st.item}>Profile</div>
			<div className={st.item}>Messages</div>
			<div className={st.item}>News</div>
			<div className={st.item}>Music</div>
			<div className={st.item}>Settings</div>
		</nav>
	)
}

export default Navbar