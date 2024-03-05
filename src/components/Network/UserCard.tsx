import React from 'react';
import styles from './Network.module.css'
import {userType} from '../../redux/network-reducer';
import UserAvatar from '../../images/user_avatar.png'

type UserCardType = {
	userData: userType
	callback: (userId: number) => void

}
export const UserCard:React.FC<UserCardType> = ({callback, userData
                                                }) => {

	const onClickHandler = () => {
		callback(userData.id)
	}

	return (
		<div className={styles.userCard_container}>
			<img src={userData.photos.small !== null
				? userData.photos.small
				: UserAvatar} alt="user_avatar" className={styles.userCard_image}
			/>
			<div>{userData.name}</div>
			<div>{userData.status}</div>
			<button onClick={onClickHandler}>{userData.followed ? 'Following' : 'Accept'}</button>
		</div>
	);
};

