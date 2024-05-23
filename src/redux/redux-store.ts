import { applyMiddleware, combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { authReducer, AuthUnionActionDispatchType } from './auth-reducer'
import {
	dialogsReducer,
	DiologsUnionActionDispatchType,
} from './dialogs-reducer'
import {
	networkReducer,
	NetworkUnionActionDispatchType,
} from './network-reducer'
import {
	profileReducer,
	ProfileUnionActionDispatchType,
} from './profile-reducer'
import { sidebarReducer } from './sidebar-reducer'

const rootReducer = combineReducers({
	profile: profileReducer,
	dialogs: dialogsReducer,
	sidebar: sidebarReducer,
	network: networkReducer,
	auth: authReducer,
	form: formReducer,
})

export type AppRootState = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<
	AppRootState,
	unknown,
	UnionActionDispatchType
>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppRootState,
	unknown,
	UnionActionDispatchType
>

export let store = createStore(rootReducer, applyMiddleware(thunk))

export type UnionActionDispatchType = ActionsType

type ActionsType =
	| AuthUnionActionDispatchType
	| DiologsUnionActionDispatchType
	| NetworkUnionActionDispatchType
	| ProfileUnionActionDispatchType
