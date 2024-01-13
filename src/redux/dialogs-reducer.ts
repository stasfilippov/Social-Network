import {DialogsPageType, SendMessageActionType, UnionActionDispatchType, UpdateNewMessageBodyActionType} from './state';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const updateNewMessageBodyAC = (newMessageBody: string): UpdateNewMessageBodyActionType => {
	return  {type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: newMessageBody}
}

export const sendMessageAC = (): SendMessageActionType => {
	return { type: SEND_MESSAGE }
}
const dialogsReducer = (state: DialogsPageType, action: UnionActionDispatchType) => {
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

export default dialogsReducer;