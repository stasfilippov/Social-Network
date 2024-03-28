import React from 'react';
import styles from './Network.module.css'
import {userType} from '../../redux/network-reducer';
import UserAvatar from '../../images/user_avatar.png'
import {NavLink} from 'react-router-dom';
import {followApi} from '../../api/followApi';

type UserCardType = {
	userData: userType
	unfollowSucceded: (userId: number) => void
	followSucceded: (userId: number) => void
	usersFollowingInProgress: number[]
}
export const UserCard: React.FC<UserCardType> = ({
	                                                 userData, usersFollowingInProgress, unfollowSucceded, followSucceded
                                                 }) => {
	return (
		<div className={styles.userCard_container}>
			<NavLink to={'/profile/' + userData.id}>
				<img src={userData.photos.small !== null
					? userData.photos.small
					: UserAvatar} alt="user_avatar" className={styles.userCard_image}
				/>
			</NavLink>
			<div>{userData.name}</div>
			<div>{userData.status}</div>
			{
				userData.followed
					? <button disabled={usersFollowingInProgress.some(id => id === userData.id)}
					          onClick={() => unfollowSucceded(userData.id)}>Unfollow</button>
					: <button disabled={usersFollowingInProgress.some(id => id === userData.id)} onClick={() => followSucceded(userData.id)}>Follow</button>
			}
		</div>
	);
};

