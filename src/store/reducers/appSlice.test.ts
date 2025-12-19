import appReducer, { setErrorParam, setLoadingParam } from './appSlice';

describe('appSlice reducer', () => {
  it('should return the initial state when called with undefined state', () => {
    const result = appReducer(undefined, { type: 'UNKNOWN_ACTION' });

    expect(result).toEqual({
      isLoading: false,
      error: null,
    });
  });

  it('should set loading param', () => {
    const initialState = {
      isLoading: false,
      error: null as string | null,
    };

    const result = appReducer(initialState, setLoadingParam(true));

    expect(result.isLoading).toBe(true);
    expect(result.error).toBeNull();
  });

  it('should set error param', () => {
    const initialState = {
      isLoading: false,
      error: null as string | null,
    };

    const errorMessage = 'Test error';
    const result = appReducer(initialState, setErrorParam(errorMessage));

    expect(result.error).toBe(errorMessage);
    expect(result.isLoading).toBe(false);
  });
});
