
import {InitialStateType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppRootState} from '../../redux/redux-store';
import {Dispatch} from 'redux';


type MapStateToPropsType = {
	data: InitialStateType
}

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
	return {
		data: state.dialogs
	}
}

type MapDispatchToPropsType = {
	onChangeCallback: (text: string) => void
	onClickCallback: () => void
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

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)