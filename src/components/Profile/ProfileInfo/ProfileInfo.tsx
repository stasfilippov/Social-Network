import { userProfileDataType } from '../../../api/profileApi'
import Preloader from '../../../common/proloader/Preloader'
import classes from '../Profile.module.css'
import ProfileStatus from './ProfileStatus'
import React from 'react';

type ProfileInfoProps = {
	profile: userProfileDataType
	status: string
	updateStatus: (status: string) => void

}
export const ProfileInfo:React.FC<ProfileInfoProps> = ({ profile, status, updateStatus }) => {
	if (!profile) {
		return <Preloader />
	}
	return (
		<div className={classes.profileInfoContainer}>
			<div className={classes.profileImagesContainer}>
				<img
					className={classes.profileSmallImage}
					src={profile.photos?.small}
					alt='profileSmallImage'
				/>
			</div>
			<div className={classes.profileDescription}>
				<h3 className={classes.profileName}>{profile.fullName}</h3>
				<ProfileStatus status={status} updateStatus={updateStatus}/>
				<p className={classes.profileAboutMe}>
					{profile.aboutMe ? profile.aboutMe : 'Not description'}
				</p>
				<div className={classes.profileContactsContainer}>
					{profile.contacts?.github}
				</div>
				<div
					className={classes.profileStatus}
					style={{
						backgroundColor: profile.lookingForAJob ? 'green' : 'red',
					}}
				>
					{profile.lookingForAJob ? 'Open' : 'Closed'} to work
				</div>
			</div>
			<div>new post</div>
		</div>
	)
}
