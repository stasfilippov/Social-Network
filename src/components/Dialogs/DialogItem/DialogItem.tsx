import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './DialogItem.module.css';
import {DialogType} from '../../../redux/state';

export const DialogItem:React.FC<DialogType> = ({name, id}) => {

	let path = '/dialogs/' + id

	return (
		<div className={classes.dialog_item}>
			<NavLink to={path} >{name}</NavLink>
		</div>
	)
}
