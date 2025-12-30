import { RootState } from '..';
import { NameSpace } from '../../constants';

export const getAppLoadingStatus = (state: RootState): boolean => state[NameSpace.App].isLoading;
export const getAppError = (state: RootState): string | null => state[NameSpace.App].error;
