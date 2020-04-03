import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { userActions } from './userAction';

export interface IUserState {
    name: string;
    email: string;
}

const initialState: IUserState = {
    name: 'nemusou',
    email: 'aaa@bbb.ccc'
};

export const userReducers = reducerWithInitialState(initialState)
    .case(userActions.updateName, (state, name) => {
        return {...state, name};
    })
    .case(userActions.updateEmail, (state, email) => {
        return {...state, email};
    });