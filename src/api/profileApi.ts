import axios from 'axios';
import {userType} from '../redux/network-reducer';
import {ResponseType} from './authApi';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': 'dd87c7b9-5ffa-413e-9bd0-5a7ab05790f6'
	}
})
export const profileApi = {
	getUserProfileData (userId: string) {
		return instance.get<userProfileDataType>(`profile/${userId}`).then(res => res.data)
	},
	getProfileStatus (userId: string) {
		return instance.get<string>(`profile/status/${userId}`).then(res => res.data)
	},
	updataProfileStatus (status: string) {
		return instance.put<ResponseType>(`profile/status`, {status}).then(res => res.data)
	}

}
export type userProfileDataType = {
	aboutMe: string;
	contacts: Contacts;
	lookingForAJob: boolean;
	lookingForAJobDescription: string;
	fullName: string;
	userId: number;
	photos: Photos;
}
export type Contacts = {
	facebook: string
	website: string
	vk: string
	twitter: string
	instagram: string
	youtube: string
	github: string
	mainLink: string
}
export type Photos = {
	small: string
	large: string
}