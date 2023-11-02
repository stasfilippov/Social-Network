import React from 'react';
import './Profile.module.css'
import classes from './Profile.module.css';
import {Posts} from './Posts/Posts';

const Profile = () => {
	return (
		<div className={classes.content}>
			<div className={classes.imgBox}>
				<img className={classes.img}
				     src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
				     alt="#"/>
			</div>
			<div>ava + desc</div>
			<div>new post</div>
			<Posts/>
		</div>
	)
}

export default Profile