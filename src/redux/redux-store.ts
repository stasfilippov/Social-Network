import {applyMiddleware, combineReducers, createStore} from 'redux';
import {sidebarReducer} from './sidebar-reducer';
import {
	profileReducer, ProfileUnionActionDispatchType,
} from './profile-reducer';
import {
	dialogsReducer, DiologsUnionActionDispatchType,
} from './dialogs-reducer';
import {
	networkReducer, NetworkUnionActionDispatchType
} from './network-reducer';
import {authReducer, AuthUnionActionDispatchType} from './auth-reducer';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';


const rootReducer = combineReducers({
	profile: profileReducer,
	dialogs: dialogsReducer,
	sidebar: sidebarReducer,
	network: networkReducer,
	auth: authReducer
})

export type AppRootState = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppRootState, unknown, UnionActionDispatchType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, UnionActionDispatchType>

export let store = createStore(rootReducer, applyMiddleware(thunk))

export type UnionActionDispatchType = ActionsType

type ActionsType = AuthUnionActionDispatchType
	| DiologsUnionActionDispatchType
	| NetworkUnionActionDispatchType
	| ProfileUnionActionDispatchType