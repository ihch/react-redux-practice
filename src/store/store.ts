import { createStore, combineReducers } from 'redux';
import { userReducers, IUserState } from './userStore/userState'

export type AppStore = {
    user: IUserState
};

export const store = createStore(
    combineReducers<AppStore>({
        user: userReducers
    })
);