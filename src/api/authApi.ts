import axios from 'axios';
import {userType} from '../redux/network-reducer';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': 'dd87c7b9-5ffa-413e-9bd0-5a7ab05790f6'
	}
})
export const authApi = {
	authMe () {
		return instance.get<ResponseType<AuthUserData>>(`/auth/me`).then(res => res.data)
	}
}

export type AuthUserData = {
	id: number
	email: string
	login: string
}

export type ResponseType<D = {}> = {
	resultCode: number
	messages: string[]
	data: D
}