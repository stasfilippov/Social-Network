import { NavLink } from 'react-router-dom'
import {
	DialogsPageType,
	DialogType,
	MessageType, StoreType,
	UnionActionDispatchType,
} from '../../redux/store'
import { DialogItem } from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import { Message } from './Message/Message'
import React, {ChangeEvent} from 'react';

type DialogsPropsType = {
	state: DialogsPageType
	onChangeCallback: (text: string) => void
	onClickCallback: () => void
}

export const Dialogs:React.FC<DialogsPropsType> = (props) => {
	const mappingDialogs = props.state.dialogsData.map((d: DialogType) => (
		<DialogItem key={d.id} name={d.name} id={d.id} />
	))

	const mappingMessages = props.state.messagesData.map((m: MessageType) => (
		<Message key={m.id} message={m.message} id={m.id} />
	))

	const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		props.onChangeCallback(event.currentTarget.value)
	}

	const onClickHandler = () => {
		props.onClickCallback()
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
