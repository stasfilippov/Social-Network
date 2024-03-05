import React from 'react';
import styles from './Network.module.css';
import {UserCard} from './UserCard';
import {userType} from '../../redux/network-reducer';


type UsersType = {
	totalUsersCount: number
	pageSize: number
	getCurrentUsersOnChangePage: (p: number) => void
	currentPage: number
	usersData: userType[]
	callBack: (userId: number) => void
}
const Users: React.FC<UsersType> = ({
	                                    totalUsersCount,
	                                    pageSize,
	                                    getCurrentUsersOnChangePage,
	                                    currentPage,
	                                    usersData,
	                                    callBack
                                    }) => {

	let pagesCount = Math.ceil(totalUsersCount / pageSize)

	let pages = []

	for (let i = 1; i <= 15; i++) {
		pages.push(i)
	}

	return (
		<div className={styles.network__content}>
			<h3>People you may know</h3>
			<div>
				{pages.map((p, i) => {
					return (
						<span
							onClick={() => getCurrentUsersOnChangePage(p)}
							className={currentPage === p
							      ? styles.selectedPage
							      : styles.page}
							key={i}
						>
							{p}
						</span>
					)
				})}
			</div>
			<div className={styles.network__cards_container}>
				{usersData.map(u =>
					<UserCard
						key={u.id}
						userData={u}
						callback={callBack}
					/>)}
			</div>
		</div>
	);
};

export default Users;