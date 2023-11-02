import React from 'react';
import st from './Header.module.css'

const Header = () => {
	return (
		<header className={st.header}>
			<img className={st.logo}
			     src={'https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg'}
			     alt="#"/>
		</header>
	)
}

export default Header