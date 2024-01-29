import React from 'react';
import styles from './Network.module.css'

type UserCardType = {
	userId: number
	callback: (userId: number) => void
	firstName: string
	secondName: string
	profession: string
	followed: boolean
}
export const UserCard:React.FC<UserCardType> = ({callback,
	                                                userId,
	                                                firstName,
	                                                secondName,
	                                                profession,
	                                                followed
                                                }) => {

	const onClickHandler = () => {
		callback(userId)
	}

	return (
		<div className={styles.userCard_container}>
			<div>{firstName + ' ' + secondName}</div>
			<div>{profession}</div>
			<button onClick={onClickHandler}>{followed ? 'Following' : 'Accept'}</button>
		</div>
	);
};

