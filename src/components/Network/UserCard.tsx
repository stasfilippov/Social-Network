import React from 'react';
import styles from './Network.module.css'
import {userType} from '../../redux/network-reducer';
import UserAvatar from '../../images/user_avatar.png'
import {NavLink} from 'react-router-dom';
import {followApi} from '../../api/followApi';

type UserCardType = {
	userData: userType
	callback: (userId: number) => void
	usersFollowingInProgress: number[]
	isFollowingProgressCallback: (isFetching: boolean, userId: number) => void
}
export const UserCard:React.FC<UserCardType> = ({callback, userData, isFollowingProgressCallback, usersFollowingInProgress
                                                }) => {
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
			{
				userData.followed
				 ? <button disabled={usersFollowingInProgress.some(id => id === userData.id)} onClick={() => {
					isFollowingProgressCallback(true, userData.id)
					 followApi.deleteFollow(userData.id).then(data => {
							 if (data.resultCode === 0) {
								 callback(userData.id)
							 }
							 isFollowingProgressCallback(false, userData.id)
						 })
					}}>Unfollow</button>
				: <button disabled={usersFollowingInProgress.some(id => id === userData.id)} onClick={() => {
						isFollowingProgressCallback(true, userData.id)
						followApi.postFollow(userData.id).then(data => {
								if (data.resultCode === 0) {
									callback(userData.id)
								}
								isFollowingProgressCallback(false, userData.id)
							})
					}}>Follow</button>
			}
		</div>
	);
};

