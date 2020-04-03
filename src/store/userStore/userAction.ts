import actinoCreatorFactory from 'typescript-fsa';

const actionCreator = actinoCreatorFactory();

export const userActions = {
    updateName: actionCreator<string>('ACTIONS_UPDATE_NAME'),
    updateEmail: actionCreator<string>('ACTIONS_UPDATE_EMAIL')
};