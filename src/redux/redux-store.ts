import {combineReducers, createStore} from 'redux';
import {sidebarReducer} from './sidebar-reducer';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';


const rootReducer = combineReducers({
	profile: profileReducer,
	dialogs: dialogsReducer,
	sidebar: sidebarReducer,
})

export let store = createStore(rootReducer)