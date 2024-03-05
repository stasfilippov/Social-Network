import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './DialogItem.module.css';
import {DialogType} from '../../../redux/dialogs-reducer';

export const DialogItem:React.FC<DialogType> = ({name, id}) => {

	let path = '/dialogs/' + id
	let pathImg = 'ava' + id

	return (
		<nav className={classes.dialog_item}>
			{/* <img className={classes.dialog_item_img} src={require('../../../images' + pathImg + '.png')} alt="" /> */}
			<NavLink to={path} >{name}</NavLink>
		</nav>
	)
}
