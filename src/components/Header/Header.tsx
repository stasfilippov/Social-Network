import logo from '../../images/logo.png'
import st from './Header.module.css'
import {NavLink} from 'react-router-dom';
import React from 'react';
import {HeaderPropsType} from './HeaderContainerApi';


const Header:React.FC<HeaderPropsType> = ({login, isAuth}) => {
	return (
		<header className={st.header}>
			<div className={st.accountContainer}>
				<div className={st.accountImage}>{login?.substr(0,1)}</div>
				{isAuth
					? <div className={st.accountName}>{login}</div>
					: <NavLink to='/login' className={st.accountSignBtn}>Sign in</NavLink>
				}
			</div>
			<img className={st.logo} src={logo} alt='#' />
			<form action='' className={st.searchForm}>
				<input type='text' className={st.searchInput} placeholder='Global search'/>
				<button>+</button>
			</form>
		</header>
	)
}

export default Header
