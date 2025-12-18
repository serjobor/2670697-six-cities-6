import { RootState } from '..';
import { AuthorizationStatus, NameSpace } from '../../constants';
import { IUser } from '../../types/user';

export const getUser = (state: RootState): IUser | null => state[NameSpace.User].user;
export const getAuthorizationStatus = (state: RootState): AuthorizationStatus | null => state[NameSpace.User].authorizationStatus;
