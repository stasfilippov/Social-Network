import {UnionActionDispatchType} from './redux-store';
import {AuthUnionActionDispatchType} from './auth-reducer';


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export type DialogType = {
	id: number
	name: string
}
export type MessageType = {
	id: number
	message: string
}

let initialState = {
	dialogsData: [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Igor'},
		{ id: 3, name: 'Andrey'},
		{ id: 4, name: 'Sveta'},
		{ id: 5, name: 'Sasha'},
		{ id: 6, name: 'Valera'},
	] as DialogType[],
	messagesData: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'I am fine' },
	] as MessageType[],
	messageBody: ''
}

export type InitialStateType = typeof initialState
export const dialogsReducer = (state: InitialStateType = initialState, action: UnionActionDispatchType): InitialStateType => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				messageBody: action.newMessageBody
			}
		case SEND_MESSAGE:
			const text = state.messageBody
			const message = { id: 4, message: text }
			return {
				...state,
				messagesData: [
					...state.messagesData,
					message
				],
				messageBody: ''
			};
		default:
			return state
	}
}

export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
export type SendMessageActionType = ReturnType<typeof sendMessageAC>

export const updateNewMessageBodyAC = (newMessageBody: string) => {
	return  {type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: newMessageBody} as const
}

export const sendMessageAC = () => {
	return { type: SEND_MESSAGE } as const
}

export type DiologsUnionActionDispatchType = UpdateNewMessageBodyActionType | SendMessageActionType