import {combineReducers, createStore} from 'redux';
import {sidebarReducer} from './sidebar-reducer';
import {AddPostActionType, profileReducer, UpdateNewPostTextActionType} from './profile-reducer';
import {dialogsReducer, SendMessageActionType, UpdateNewMessageBodyActionType} from './dialogs-reducer';
import {
	networkReducer,
	SetPageActionType,
	SetTotalUsersCountActionType,
	ToggleFollowActionType,
	UsersActionType
} from './network-reducer';


const rootReducer = combineReducers({
	profile: profileReducer,
	dialogs: dialogsReducer,
	sidebar: sidebarReducer,
	network: networkReducer
})

export type AppRootState = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)

export type UnionActionDispatchType = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageBodyActionType | SendMessageActionType | ToggleFollowActionType | UsersActionType | SetPageActionType | SetTotalUsersCountActionType
