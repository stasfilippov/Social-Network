import React from 'react';
import classes from '../Profile.module.css';

export const ProfileInfo = () => {
	return (
		<div>
			<div className={classes.imgBox}>
				<img className={classes.img}
				     src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
				     alt="#"/>
			</div>
			<div>ava + desc</div>
			<div>new post</div>
		</div>
	);
};

