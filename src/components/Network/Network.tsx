import React from 'react';
import styles from './Network.module.css'
import {NetworkPropsType} from './NetworkContainer';
import {UserCard} from './UserCard';
import axios from 'axios';
import {userType} from '../../redux/network-reducer';




type ResponseType = {
	items: userType []
	totalCount: number
	error: string
}

export const Network:React.FC<NetworkPropsType> = ({usersData, callBack, setUsers}) => {
	if (usersData.length === 0) {
		axios.get<ResponseType>('https://social-network.samuraijs.com/api/1.0/users')
			.then(res => {
				setUsers(res.data.items)
			})
	}

	let mappingUsers = usersData.map(u =>
		<UserCard
			key={u.id}
			userData={u}
			callback={callBack}
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
