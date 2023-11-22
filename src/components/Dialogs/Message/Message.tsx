import React from 'react';
import classes from './Message.module.css';
import {MessageType} from '../../../index';

export const Message:React.FC<MessageType> = ({message}) => {
	return (
        <div className={classes.message}>{message}</div>
    )
}