import logo from '../../images/logo.png'
import st from './Header.module.css'

const Header = () => {
	return (
		<header className={st.header}>
			<div className={st.accountDropdown}>Stas Filippov</div>
			<img className={st.logo} src={logo} alt='#' />
			<form action='' className={st.searchForm}>
				<input type='text' className={st.searchInput} placeholder='Global search'/>
				<button>+</button>
			</form>
		</header>
	)
}

export default Header
