import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

export const Dialogs = () => {
	return (
		<div className={classes.dialogs_content}>
			<div className={classes.dialogs}>
				<DialogItem name={'Dimych'} id={1}/>
				<DialogItem name={'Igor'} id={2}/>
				<DialogItem name={'Andrey'} id={3}/>
				<DialogItem name={'Sveta'} id={4}/>
				<DialogItem name={'Sasha'} id={5}/>
				<DialogItem name={'Valera'} id={6}/>
			</div>
			<div className={classes.messages}>
				<Message text={'Hi'}/>
				<Message text={'How are you?'}/>
				<Message text={'I am fine'}/>
			</div>
		</div>
	);
};


type DialogItemProps = {
	name: string;
	id: number;
}
const DialogItem:React.FC<DialogItemProps> = ({name, id}) => {

	let path = '/dialogs/' + id

	return (
		<div className={classes.dialog_item}>
			<NavLink to={path} >{name}</NavLink>
		</div>
	)
}

type MessageType = {
	text: string;
}
const Message:React.FC<MessageType> = ({text}) => {
	return (
        <div className={classes.message}>{text}</div>
    )
}