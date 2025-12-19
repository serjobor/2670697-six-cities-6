import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi, Mock } from 'vitest';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../constants';
import userReducer from '../../store/reducers/userSlice';
import PrivateRoute from './PrivateRoute';

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-router-dom')>();
  return {
    ...actual,
    useLocation: vi.fn(),
  };
});

describe('PrivateLayout component', () => {
  const mockedUseLocation = useLocation as Mock;

  const ProtectedPage = () => (
    <div data-testid="protected-content">Protected Content</div>
  );
  const LoginPage = () => <div data-testid="login-page">Login Page</div>;

  const renderWithStore = (
    authStatus: AuthorizationStatus,
    initialRoute = '/protected'
  ) => {
    mockedUseLocation.mockReturnValue({
      pathname: initialRoute,
      search: '',
      hash: '',
      state: null,
    });

    const store = configureStore({
      reducer: {
        user: userReducer,
      },
      preloadedState: {
        user: {
          authorizationStatus: authStatus,
          user: null,
        },
      },
    });

    return render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[initialRoute]}>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/protected" element={<ProtectedPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  };

  test('should redirect to login page when auth status is UNKNOWN', () => {
    renderWithStore(AuthorizationStatus.Unknown);

    expect(screen.getByTestId('login-page')).toBeInTheDocument();
    expect(screen.getByText('Login Page')).toBeInTheDocument();

    expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
  });

  test('should render Outlet when auth status is AUTH', () => {
    renderWithStore(AuthorizationStatus.Auth);

    expect(screen.getByTestId('protected-content')).toBeInTheDocument();
    expect(screen.getByText('Protected Content')).toBeInTheDocument();
    expect(screen.queryByTestId('login-page')).not.toBeInTheDocument();
  });

  test('should redirect to login page when auth status is NO_AUTH', () => {
    renderWithStore(AuthorizationStatus.NoAuth);

    expect(screen.getByTestId('login-page')).toBeInTheDocument();
    expect(screen.getByText('Login Page')).toBeInTheDocument();
    expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
  });
});
