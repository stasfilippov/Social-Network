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
export type DialogsPageType = {
	dialogsData: DialogType[]
	messagesData: MessageType[]
}
export type ProfilePageType = {
	postsData: PostType []
}

export type StateType = {
	profilePage: ProfilePageType
	dialogsPage: DialogsPageType

}
export let state = {
	profilePage: {
		postsData: [
			{id: 1, postTitle: 'Hi how are you?', likesCount: 14},
			{id: 2, postTitle: 'Yo i am very happy', likesCount: 10},
			{id: 3, postTitle: 'Yo i am very happy', likesCount: 10},
			{id: 4, postTitle: 'Yo i', likesCount: 10},
		]
	},
	dialogsPage: {
		dialogsData: [
			{id: 1, name: 'Dimych'},
			{id: 2, name: 'Igor'},
			{id: 3, name: 'Andrey'},
			{id: 4, name: 'Sveta'},
			{id: 5, name: 'Sasha'},
			{id: 6, name: 'Valera'},
		],
		messagesData: [
			{id: 1, message: 'Hi'},
			{id: 2, message: 'How are you?'},
			{id: 3, message: 'I am fine'},
		]
	}

}