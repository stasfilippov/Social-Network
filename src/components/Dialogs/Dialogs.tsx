import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType, DialogType, MessageType} from '../../redux/state';


type DialogsPropsType = {
	state: DialogsPageType
}


export const Dialogs = (props: DialogsPropsType) => {

	const mappingDialogs = props.state.dialogsData.map((d: DialogType) => (
		<DialogItem key={d.id} name={d.name} id={d.id}/>
	))

	const mappingMessages = props.state.messagesData.map((m: MessageType) => (
		<Message key={m.id} message={m.message} id={m.id}/>
	))


	return (
		<div className={classes.dialogs_content}>
			<div className={classes.dialogs}>
				{mappingDialogs}
			</div>
			<div className={classes.messages}>
				{mappingMessages}
			</div>
		</div>
	);
};
