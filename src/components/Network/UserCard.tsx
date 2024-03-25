import React from 'react';
import styles from './Network.module.css'
import {userType} from '../../redux/network-reducer';
import UserAvatar from '../../images/user_avatar.png'
import {NavLink} from 'react-router-dom';

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
			<NavLink to={'/profile/'+ userData.id}>
				<img src={userData.photos.small !== null
					? userData.photos.small
					: UserAvatar} alt="user_avatar" className={styles.userCard_image}
				/>
			</NavLink>
			<div>{userData.name}</div>
			<div>{userData.status}</div>
			<button onClick={onClickHandler}>{userData.followed ? 'Following' : 'Accept'}</button>
		</div>
	);
};

