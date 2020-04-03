import { createStore, combineReducers } from 'redux';
import { userReducers, IUserState } from './userStore/userState'

export type AppStore = {
    user: IUserState
};

const store = createStore(
    combineReducers<AppStore>({
        user: userReducers
    })
);

export default store;