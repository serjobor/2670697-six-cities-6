import userReducer, {
  removeUserData,
  setAuthorizationStatus,
  setUser
} from './userSlice';
import { AuthorizationStatus } from '../../constants';

describe('userSlice reducer', () => {
  it('should return the initial state when called with undefined state', () => {
    const result = userReducer(undefined, { type: 'UNKNOWN_ACTION' });

    expect(result).toEqual({
      user: null,
      authorizationStatus: AuthorizationStatus.Unknown,
    });
  });

  it('should set user data', () => {
    const mockUser = {
      name: 'Test',
      avatarUrl: './',
      isPro: false,
      email: 'test@test.ru',
      token: 'secret',
    };

    const state = userReducer(undefined, setUser(mockUser));

    expect(state.user).toEqual(mockUser);
  });

  it('should set authorization status', () => {
    const state = userReducer(undefined, setAuthorizationStatus(AuthorizationStatus.Auth));

    expect(state.authorizationStatus).toBe(AuthorizationStatus.Auth);
  });

  it('should remove user data', () => {
    const initialState = {
      user: {
        name: 'Test',
        avatarUrl: './',
        isPro: false,
        email: 'test@test.ru',
        token: 'secret',
      },
      authorizationStatus: AuthorizationStatus.Auth,
    };

    const state = userReducer(initialState, removeUserData());

    expect(state.user).toBeNull();
    expect(state.authorizationStatus).toBe(AuthorizationStatus.Auth);
  });
});
