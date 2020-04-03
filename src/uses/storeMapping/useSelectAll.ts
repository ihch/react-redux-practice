import { useSelector } from 'react-redux';
import { AppStore } from '../../store/store';

export const useSelectAll = () => useSelector<AppStore, AppStore>((value) => value);

export const useUserEmail = () => useSelector<AppStore, string>((value) => value.user.email);