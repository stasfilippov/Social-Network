import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {Posts} from './Posts';
import {connect} from 'react-redux';
import {AppRootState, UnionActionDispatchType} from '../../../redux/redux-store';
import {PostType} from '../../../redux/store';
import {Dispatch} from 'redux';


type MapStateToPropsType = {
	data: PostType[]
	newPostText: string
}

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
	return {
		data: state.profile.postsData,
		newPostText: state.profile.newPostText
	}
}

type MapDispatchToPropsType = {
	updateNewPostText: (text: string) => void
	addPost: () => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
	return {
		updateNewPostText: (text: string) => {
			dispatch(updateNewPostTextAC(text))
		},
		addPost: () => {
			dispatch(addPostAC())
		}
	}
}

export type PostsPropsType = MapStateToPropsType & MapDispatchToPropsType

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
