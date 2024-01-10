export type DialogType = {
	id: number
	name: string
}
export type MessageType = {
	id: number
	message: string
}

export type PostType = {
	postTitle: string
	likesCount: number
	id: number
}

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

export type DialogsPageType = {
	dialogsData: DialogType[]
	messagesData: MessageType[]
}
export type ProfilePageType = {
	postsData: PostType[]
	newPostText: string
}

export type StateType = {
	profilePage: ProfilePageType
	dialogsPage: DialogsPageType
	navbarData: MenuType[]
	friendsData: FriendType[]
}

let rerenderEntireTree = (state: StateType)=> {
	console.log('state changed')
}

export let state = {
	profilePage: {
		postsData: [
			{ id: 1, postTitle: 'Hi how are you?', likesCount: 14 },
			{ id: 2, postTitle: 'Yo i am very happy', likesCount: 10 },
			{ id: 3, postTitle: 'Yo i am very happy', likesCount: 10 },
			{ id: 4, postTitle: 'Yo i', likesCount: 10 },
		],
		newPostText: ''
	},
	dialogsPage: {
		dialogsData: [
			{ id: 1, name: 'Dimych' },
			{ id: 2, name: 'Igor'},
			{ id: 3, name: 'Andrey'},
			{ id: 4, name: 'Sveta'},
			{ id: 5, name: 'Sasha'},
			{ id: 6, name: 'Valera'},
		],
		messagesData: [
			{ id: 1, message: 'Hi' },
			{ id: 2, message: 'How are you?' },
			{ id: 3, message: 'I am fine' },
		],
	},
	navbarData: [
		{ id: 1, menuName: 'Profile', src: '', slug: '/profile' },
		{ id: 2, menuName: 'Messages', src: '', slug: '/dialogs' },
		{ id: 3, menuName: 'News', src: '', slug: '/news' },
		{ id: 4, menuName: 'Music', src: '', slug: '/music' },
		{ id: 5, menuName: 'Settings', src: '', slug: '/settings' },
	],
	friendsData: [
		{ id: 1, nameFriend: 'Vasya', srcImg: 'ava1' },
		{ id: 2, nameFriend: 'Vika', srcImg: 'ava2' },
		{ id: 3, nameFriend: 'Dima', srcImg: 'ava3' },
		{ id: 4, nameFriend: 'Albina', srcImg: 'ava4' },
		{ id: 5, nameFriend: 'Sveta', srcImg: 'ava5' },
	],
}

export const subscribe = (observer: (state: StateType) => void) => {
	rerenderEntireTree = observer
}

export const addPost = () => {
	const newPost: PostType = {
		id: 5,
		postTitle: state.profilePage.newPostText,
		likesCount: 0
	}
	state.profilePage.postsData.push(newPost)
	state.profilePage.newPostText = ''
	rerenderEntireTree(state)
}
export const changeNewPostText = (newText: string) => {
	state.profilePage.newPostText = newText
	rerenderEntireTree(state)
}

