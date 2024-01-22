import {combineReducers, createStore} from 'redux';
import {sidebarReducer} from './sidebar-reducer';
import {AddPostActionType, profileReducer, UpdateNewPostTextActionType} from './profile-reducer';
import {dialogsReducer, SendMessageActionType, UpdateNewMessageBodyActionType} from './dialogs-reducer';


const rootReducer = combineReducers({
	profile: profileReducer,
	dialogs: dialogsReducer,
	sidebar: sidebarReducer,
})

export type AppRootState = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)

export type UnionActionDispatchType = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageBodyActionType | SendMessageActionType
