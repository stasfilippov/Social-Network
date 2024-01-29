import {UnionActionDispatchType} from './redux-store';

export type MenuType = {
	id: number
	menuName: string
	src: string
	slug: string
}

export type FriendType = {
	id: number
	nameFriend: string
	srcImg: string
}


let initialState = {
	navbarData: [
		{ id: 1, menuName: 'Profile', src: '', slug: '/profile' },
		{ id: 2, menuName: 'Messages', src: '', slug: '/dialogs' },
		{ id: 3, menuName: 'News', src: '', slug: '/news' },
		{ id: 4, menuName: 'Network', src: '', slug: '/network' },
		{ id: 5, menuName: 'Music', src: '', slug: '/music' },
		{ id: 6, menuName: 'Settings', src: '', slug: '/settings' },
	] as MenuType[],
		friendsData: [
		{ id: 1, nameFriend: 'Vasya', srcImg: 'ava1' },
		{ id: 2, nameFriend: 'Vika', srcImg: 'ava2' },
		{ id: 3, nameFriend: 'Dima', srcImg: 'ava3' },
		{ id: 4, nameFriend: 'Albina', srcImg: 'ava4' },
		{ id: 5, nameFriend: 'Sveta', srcImg: 'ava5' },
	] as FriendType[],
}

export type InitialStateType = typeof initialState

export const sidebarReducer = (state: InitialStateType = initialState, action: UnionActionDispatchType):InitialStateType => {
	return state
}