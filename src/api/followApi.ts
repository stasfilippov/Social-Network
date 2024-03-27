import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': 'dd87c7b9-5ffa-413e-9bd0-5a7ab05790f6'
	}
})
export const followApi = {
	postFollow (userId: number) {
		return instance.post<ResponseType>(`follow/${userId}`).then(res => res.data)
	},
	deleteFollow (userId: number) {
		return instance.delete<ResponseType>(`follow/${userId}`).then(res => res.data)
	},
}

type ResponseType<D = {}> = {
	resultCode: number
	messages: string[]
	data: D
}