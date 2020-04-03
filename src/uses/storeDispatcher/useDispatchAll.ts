import { useDispatch } from 'react-redux';
import { userActions } from '../../store/userStore/userAction';

export const useDispatchEmailAndName = (name: string, email: string) => {
    const dispatch = useDispatch();
    dispatch(userActions.updateEmail(email));
    dispatch(userActions.updateName(name));
}