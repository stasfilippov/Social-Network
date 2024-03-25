import React from 'react';
import styles from './Network.module.css'
import {userType} from '../../redux/network-reducer';
import UserAvatar from '../../images/user_avatar.png'
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {ResponseType} from '../Header/HeaderContainerApi';

type UserCardType = {
	userData: userType
	callback: (userId: number) => void

}
export const UserCard:React.FC<UserCardType> = ({callback, userData
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
				 ? <button onClick={() => {
					 axios.delete<ResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${userData.id}`, {
						 withCredentials: true,
						 headers: {
							 'API-KEY': 'dd87c7b9-5ffa-413e-9bd0-5a7ab05790f6'
						 }
					 })
						 .then(res => {
							 if (res.data.resultCode === 0) {
								 callback(userData.id)
							 }
						 })
					}}>Unfollow</button>
				: <button onClick={() => {
						axios.post<ResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${userData.id}`, {}, {
							withCredentials: true,
							headers: {
								'API-KEY': 'dd87c7b9-5ffa-413e-9bd0-5a7ab05790f6'
							}
						})
							.then(res => {
								if (res.data.resultCode === 0) {
									callback(userData.id)
								}
							})
					}}>Follow</button>
			}
		</div>
	);
};

