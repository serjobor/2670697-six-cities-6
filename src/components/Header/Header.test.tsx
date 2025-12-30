import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { getFavoriteoffers } from '../../store/selectors/offerSelectors';
import { AnyAction, Store } from '@reduxjs/toolkit';
import { getAuthorizationStatus, getUser } from '../../store/selectors/userSelectors';
import Header from './Header';
import { AuthorizationStatus } from '../../constants';

const mockDispatch = vi.fn();
const mockUseSelector = vi.fn();
const mockNavigate = vi.fn();

vi.mock('react-redux', async () => {
  const actual = await vi.importActual<typeof import('react-redux')>(
    'react-redux'
  );
  return {
    ...actual,
    useDispatch: () => mockDispatch,
    useSelector: (selector: unknown): unknown => mockUseSelector(selector),
  };
});

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>(
    'react-router-dom'
  );
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock('../../store/api-actions', () => ({
  logoutAction: vi.fn(),
}));

const fakeStore = {
  getState: () => ({}),
  dispatch: mockDispatch,
  subscribe: () => () => {},
};

const renderHeader = () =>
  render(
    <Provider store={fakeStore as unknown as Store<object, AnyAction>}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

beforeEach(() => {
  vi.clearAllMocks();
});

describe('Header', () => {
  it('renders Sign in when NO_AUTH', () => {
    mockUseSelector.mockImplementation((selector) => {
      if (selector === getAuthorizationStatus) {
        return AuthorizationStatus.NoAuth;
      }
      if (selector === getUser) {
        return null;
      }
      if (selector === getFavoriteoffers) {
        return [];
      }
      return undefined;
    });

    renderHeader();

    expect(screen.getByText('Sign in')).toBeVisible();
  });
});
