import { NavLink } from 'react-router-dom'
import {
	DialogsPageType,
	DialogType,
	MessageType,
	UnionActionDispatchType,
} from '../../redux/state'
import { DialogItem } from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import { Message } from './Message/Message'
import React, {ChangeEvent} from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';

type DialogsPropsType = {
	state: DialogsPageType
	dispatch: (action: UnionActionDispatchType)=> void
}

export const Dialogs = (props: DialogsPropsType) => {
	const mappingDialogs = props.state.dialogsData.map((d: DialogType) => (
		<DialogItem key={d.id} name={d.name} id={d.id} />
	))

	const mappingMessages = props.state.messagesData.map((m: MessageType) => (
		<Message key={m.id} message={m.message} id={m.id} />
	))

	const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		props.dispatch(updateNewMessageBodyAC(event.currentTarget.value))
	}

	const onClickHandler = () => {
		props.dispatch(sendMessageAC())
	}

	return (
		<div className={classes.dialogs_content}>
			<div className={classes.dialogs}>
				<NavLink to={'/dialogs'} className={classes.title}>Messaging</NavLink>
				<div>{mappingDialogs}</div>
			</div>
			<div className={classes.messages}>
				<div>{mappingMessages}</div>
				<textarea value={props.state.messageBody} onChange={onChangeHandler} placeholder={'Enter your message'}></textarea>
				<button onClick={onClickHandler}>Отправить</button>
			</div>
		</div>
	)
}
