import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {
	InitialStateType,
	sendMessageAC,
	updateNewMessageBodyAC,
} from '../../redux/dialogs-reducer'
import { AppRootState } from '../../redux/redux-store'
import { Dialogs } from './Dialogs'

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
	return {
		data: state.dialogs,
		isAuth: state.auth.isAuth,
	}
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
	return {
		onChangeCallback: (text: string) => {
			dispatch(updateNewMessageBodyAC(text))
		},
		onClickCallback: () => {
			dispatch(sendMessageAC())
		},
	}
}

export default compose<React.ComponentType>(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs)

type MapStateToPropsType = {
	data: InitialStateType
	isAuth: boolean
}

type MapDispatchToPropsType = {
	onChangeCallback: (text: string) => void
	onClickCallback: () => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType
