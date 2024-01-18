import {
	StoreType,
} from '../../redux/store'
import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';

type DialogsContainerType = {
	store: StoreType
}

export const DialogsContainer:React.FC<DialogsContainerType> = (props) => {

	let state = props.store.getState().dialogsPage
	const onNewMessageChange = (text: string) => {
		props.store.dispatch(updateNewMessageBodyAC(text))
	}

	const onSendMessageClick = () => {
		props.store.dispatch(sendMessageAC())
	}

	return <Dialogs state={state} onChangeCallback={onNewMessageChange} onClickCallback={onSendMessageClick} />
}
