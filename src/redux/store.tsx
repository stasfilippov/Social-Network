import {addPostAC, profileReducer, updateNewPostTextAC} from './profile-reducer';
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {UnionActionDispatchType} from './redux-store';

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
	messageBody: string
}
export type ProfilePageType = {
	postsData: PostType[]
	newPostText: string
}
export type SidebarType = {
	navbarData: MenuType[]
	friendsData: FriendType[]
}
export type RootStateType = {
	profilePage: ProfilePageType
	dialogsPage: DialogsPageType
	sidebar: SidebarType
}





export type StoreType = {
	_state: RootStateType
	_callSubscriber: (state: RootStateType) => void
	subscribe: (observer: (state: RootStateType) => void) => void
	getState: () => RootStateType
	dispatch: (action: UnionActionDispatchType) => void
}

export let store: StoreType = {
	_state: {
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
			messageBody: ''
		},
		sidebar: {
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

	},
	_callSubscriber (state: RootStateType){
		console.log('state changed')
	},
	subscribe (observer: (state: RootStateType) => void) {
		this._callSubscriber = observer
	},
	getState() {
		return this._state
	},
	dispatch (action: UnionActionDispatchType) {
		profileReducer(this._state.profilePage, action)
		dialogsReducer(this._state.dialogsPage, action)
		sidebarReducer(this._state.sidebar, action)

		this._callSubscriber(this._state)
	}
}



