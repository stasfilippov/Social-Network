const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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

export type AddPostActionType = {
	type:'ADD-POST'
}
export type UpdateNewPostText = {
	type:'UPDATE-NEW-POST-TEXT'
	newText: string
}

export type ActionDispatchType = AddPostActionType | UpdateNewPostText


export let store = {
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
	},
	_callSubscriber (state: StateType){
		console.log('state changed')
	},
	subscribe (observer: (state: StateType) => void) {
		this._callSubscriber = observer
	},
	getState() {
		return this._state
	},
	dispatch (action: ActionDispatchType) {
		switch (action.type) {
			case ADD_POST:
				const newPost: PostType = {
					id: 5,
					postTitle: this._state.profilePage.newPostText,
					likesCount: 0
				}
				this._state.profilePage.postsData.push(newPost)
				this._state.profilePage.newPostText = ''
				this._callSubscriber(this._state)
				break;
			case UPDATE_NEW_POST_TEXT:
				this._state.profilePage.newPostText = action.newText
				this._callSubscriber(this._state)
				break;

			default:
				throw new Error('Please pass correct action type')
		}
	}
}

export const addPostAC = (): AddPostActionType => {
	return {
		type: ADD_POST
	}
}
export const updateNewPostTextAC = (text: string): UpdateNewPostText => {
	return {type: UPDATE_NEW_POST_TEXT, newText: text}

}