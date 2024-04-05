import {InitialStateType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppRootState} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
	return {
		data: state.dialogs,
		isAuth: state.auth.isAuth
	}
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
	return {
		onChangeCallback: (text: string) => {
			dispatch(updateNewMessageBodyAC(text))
		},
		onClickCallback: () => {
			dispatch(sendMessageAC())
		}
	}
}


export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))


type MapStateToPropsType = {
	data: InitialStateType
	isAuth: boolean
}

type MapDispatchToPropsType = {
	onChangeCallback: (text: string) => void
	onClickCallback: () => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType
