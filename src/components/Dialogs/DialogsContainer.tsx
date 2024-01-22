
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppRootState, UnionActionDispatchType} from '../../redux/redux-store';


const mapStateToProps = (state: AppRootState) => {
	return {
		data: state.dialogs
	}
}

const mapDispatchToProps = (dispatch: (actionCreator: UnionActionDispatchType) => void) => {
	return {
		onChangeCallback: (text: string) => {
			dispatch(updateNewMessageBodyAC(text))
		},
		onClickCallback: () => {
			dispatch(sendMessageAC())
		}
	}
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)