import React from 'react';
import styles from './Network.module.css';
import {UserCard} from './UserCard';
import axios from 'axios';
import {userType} from '../../redux/network-reducer';
import {NetworkPropsType} from './NetworkContainer';

type ResponseType = {
	items: userType []
	totalCount: number
	error: string
}
class Network extends React.Component<NetworkPropsType>{
	componentDidMount() {
		axios.get<ResponseType>('https://social-network.samuraijs.com/api/1.0/users')
			.then(res => {
				this.props.setUsers(res.data.items)
			})
	}

	render() {
		return (
			<div className={styles.network__content}>
				<h3>People you may know</h3>
				<div className={styles.network__cards_container}>
					{this.props.usersData.map(u =>
						<UserCard
							key={u.id}
							userData={u}
							callback={this.props.callBack}
						/>)}
				</div>
			</div>
		);
	}

}

export default Network