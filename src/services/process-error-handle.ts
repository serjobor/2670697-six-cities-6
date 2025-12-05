import {store} from '../store';
import {clearErrorAction} from '../store/api-actions';
import { setErrorParam } from '../store/reducers/appSlice';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setErrorParam(message));
  store.dispatch(clearErrorAction());
};