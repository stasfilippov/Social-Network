const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'
const dialogsReducer = (state: any, action: any) => {
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