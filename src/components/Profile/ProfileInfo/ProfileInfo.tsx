import { userProfileDataType } from '../../../api/profileApi'
import Preloader from '../../../common/proloader/Preloader'
import classes from '../Profile.module.css'
import ProfileStatus from './ProfileStatus'

export const ProfileInfo = (props: { profile: userProfileDataType }) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div className={classes.profileInfoContainer}>
			<div className={classes.profileImagesContainer}>
				<img
					className={classes.profileSmallImage}
					src={props.profile.photos?.small}
					alt='profileSmallImage'
				/>
			</div>
			<div className={classes.profileDescription}>
				<h3 className={classes.profileName}>{props.profile.fullName}</h3>
				<ProfileStatus status='Hello world' />
				<p className={classes.profileAboutMe}>
					{props.profile.aboutMe ? props.profile.aboutMe : 'Not description'}
				</p>
				<div className={classes.profileContactsContainer}>
					{props.profile.contacts?.github}
				</div>
				<div
					className={classes.profileStatus}
					style={{
						backgroundColor: props.profile.lookingForAJob ? 'green' : 'red',
					}}
				>
					{props.profile.lookingForAJob ? 'Open' : 'Closed'} to work
				</div>
			</div>
			<div>new post</div>
		</div>
	)
}
