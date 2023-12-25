import React from 'react';
import classes from './Message.module.css';
import {MessageType} from '../../../redux/state';

export const Message:React.FC<MessageType> = ({message}) => {
	return (
        <div className={classes.message}>{message}</div>
    )
}