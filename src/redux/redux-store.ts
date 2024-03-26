import {combineReducers, createStore} from 'redux';
import {sidebarReducer} from './sidebar-reducer';
import {
	AddPostActionType,
	profileReducer,
	SetUserProfileDataActionType,
	UpdateNewPostTextActionType
} from './profile-reducer';
import {dialogsReducer, SendMessageActionType, UpdateNewMessageBodyActionType} from './dialogs-reducer';
import {
	networkReducer,
	SetPageActionType,
	SetTotalUsersCountActionType,
	ToggleFollowActionType, ToggleIsFetchingActionType, ToggleIsFollowingProgressActionType,
	UsersActionType
} from './network-reducer';
import {authReducer} from './auth-reducer';


const rootReducer = combineReducers({
	profile: profileReducer,
	dialogs: dialogsReducer,
	sidebar: sidebarReducer,
	network: networkReducer,
	auth: authReducer
})

export type AppRootState = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)

export type UnionActionDispatchType = AddPostActionType
	| UpdateNewPostTextActionType
	| UpdateNewMessageBodyActionType
	| SendMessageActionType
	| ToggleFollowActionType
	| UsersActionType
	| SetPageActionType
	| SetTotalUsersCountActionType
	| ToggleIsFetchingActionType
	| SetUserProfileDataActionType
| ToggleIsFollowingProgressActionType

