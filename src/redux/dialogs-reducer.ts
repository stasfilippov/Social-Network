import {
	UnionActionDispatchType,
} from './store';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const updateNewMessageBodyAC = (newMessageBody: string) => {
	return  {type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: newMessageBody} as const
}

export const sendMessageAC = () => {
	return { type: SEND_MESSAGE } as const
}

export type DialogType = {
	id: number
	name: string
}
export type MessageType = {
	id: number
	message: string
}
export type DialogsPageType = {
	dialogsData: DialogType[]
	messagesData: MessageType[]
	messageBody: string
}

let initialState: DialogsPageType = {
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
}
export const dialogsReducer = (state = initialState, action: UnionActionDispatchType) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.messageBody = action.newMessageBody
			break;
		case SEND_MESSAGE:
			const text = state.messageBody
			state.messageBody = ''
			const message = { id: 4, message: text }
			state.messagesData.push(message)
			break;
		default:
			return state
	}
}

