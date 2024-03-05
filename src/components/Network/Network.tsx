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
		axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(res => {
				this.props.setUsers(res.data.items)
				this.props.setTotalUsersCount(res.data.totalCount)
			})
	}

	getCurrentUsersOnChangePage (currentPage: number) {
		this.props.setCurrentPage(currentPage)
		axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users/?page=${currentPage}&count=${this.props.pageSize}`)
			.then(res => {
				this.props.setUsers(res.data.items)
			})
	}

	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

		let pages = []

		for (let i = 1; i <= 10; i++) {
			pages.push(i)
		}


		return (
			<div className={styles.network__content}>
				<h3>People you may know</h3>
				<div>
					{pages.map((p,i) => {
						return <span onClick={() => this.getCurrentUsersOnChangePage(p)}
						             className={this.props.currentPage === p
							? styles.selectedPage
							: styles.page}
						             key={i}
						>
							{p}
						</span>
					})}
				</div>
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