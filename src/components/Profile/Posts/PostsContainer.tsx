import {addPost, PostType, updateNewPostText} from '../../../redux/profile-reducer';
import {Posts} from './Posts';
import {connect} from 'react-redux';
import {AppRootState} from '../../../redux/redux-store';
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

export type PostsPropsType = MapStateToPropsType & MapDispatchToPropsType

export const PostsContainer = connect(mapStateToProps, {updateNewPostText, addPost})(Posts)
