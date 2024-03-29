import React from 'react';
import styles from './Network.module.css';
import {UserCard} from './UserCard';
import {NetworkPropsType} from './NetworkContainer';




type UsersType = NetworkPropsType & {
	onChangePage: (currentPage: number) => void
};

// ExtendedType will now have prop1, prop2, prop3, and prop4 properties

const Users: React.FC<UsersType> = ({
	                                    onChangePage,
	                                    currentPage,
	                                    usersData,
	                                    usersFollowingInProgress,
	                                    unfollowSucceded, followSucceded
                                    }) => {

	// let pagesCount = Math.ceil(totalUsersCount / pageSize)

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
							onClick={() => onChangePage(p)}
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
						usersFollowingInProgress={usersFollowingInProgress}
						unfollowSucceded={unfollowSucceded}
						followSucceded={followSucceded}
					/>)}
			</div>
		</div>
	);
};

export default Users;