import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {Posts} from './Posts';
import {connect} from 'react-redux';
import {AppRootState, UnionActionDispatchType} from '../../../redux/redux-store';


const mapStateToProps = (state: AppRootState) => {
	return {
		data: state.profile.postsData,
		newPostText: state.profile.newPostText
	}
}

const mapDispatchToProps = (dispatch: (actionCreator: UnionActionDispatchType) => void) => {
	return {
		updateNewPostText: (text: string) => {
			dispatch(updateNewPostTextAC(text))
		},
		addPost: () => {
			dispatch(addPostAC())
		}
	}
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
