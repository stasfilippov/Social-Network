import React from 'react';
import styles from './Network.module.css'
import {NetworkPropsType} from './NetworkContainer';
import {UserCard} from './UserCard';




export const Network:React.FC<NetworkPropsType> = ({usersData, callBack, setUsers}) => {

	if (usersData.length === 0) {
		setUsers([
			{
				id: 1,
				profileImg: '',
				firstName: 'Jane',
				secondName: 'Cooper',
				profession: 'SMM manager - Orion Soft',
				followed: false
			},
			{
				id: 2,
				profileImg: '',
				firstName: 'Olya',
				secondName: 'Bondareva',
				profession: 'HR Specialist - Freelance',
				followed: false

			},
			{
				id: 3,
				profileImg: '',
				firstName: 'Jane',
				secondName: 'Cooper',
				profession: 'IT Sales & Business Development Professional',
				followed: true
			}
		])
	}

	let mappingUsers = usersData.map(u =>
		<UserCard
			key={u.id}
			userId={u.id}
			callback={callBack}
			firstName={u.firstName}
			secondName={u.secondName}
			profession={u.profession}
			followed={u.followed}
		/>)

	return (
		<div className={styles.network__content}>
			<h3>People you may know</h3>
			<div className={styles.network__cards_container}>
				{mappingUsers}
			</div>
		</div>
	);
};
