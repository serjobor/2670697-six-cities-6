import App from './App';
import { renderWithProviders } from './utils/test-utils';
import { AuthorizationStatus, Paths } from './constants';
import { screen } from '@testing-library/react';
import { RootState } from './store';

vi.mock('./store/api-actions', () => ({
  fetchFavoriteOffers: () => ({ type: 'offer/fetchFavoriteOffers' }),
}));

describe('Application routing', () => {
  it('should render spinner when authorization status is Unknown', () => {
    window.history.pushState({}, 'Test page', Paths.Main);

    const preloadedState: Partial<RootState> = {
      app: {
        isLoading: false,
        error: null,
      },
      user: {
        user: null,
        authorizationStatus: AuthorizationStatus.Unknown,
      },
    };

    renderWithProviders(<App />, {
      preloadedState,
    });

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render MainPage when user is not authorized and path is "/"', () => {
    window.history.pushState({}, 'Main page', Paths.Main);

    const preloadedState: Partial<RootState> = {
      app: {
        isLoading: false,
        error: null,
      },
      user: {
        user: null,
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
      offer: {
        city: 'Paris',
        sortParam: 'Popular',
        offers: [],
        nearbyOffers: [],
        fullOffer: null,
        favoriteOffers: [],
        isFavoriteOffersLoad: false,
        review: null,
        isReviewSending: false,
        comments: [],
      },
    };

    renderWithProviders(<App />, {
      preloadedState,
    });

    expect(screen.getByText('Cities')).toBeInTheDocument();
  });

  it('should render LoginPage when user is not authorized and path is "/login"', () => {
    window.history.pushState({}, 'Login page', Paths.Login);

    const preloadedState: Partial<RootState> = {
      app: {
        isLoading: false,
        error: null,
      },
      user: {
        user: null,
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
    };

    renderWithProviders(<App />, {
      preloadedState,
    });

    expect(screen.getByRole('heading', { name: 'Sign in' })).toBeInTheDocument();
  });

  it('should redirect to LoginPage when user is not authorized and tries to open favorites route', () => {
    window.history.pushState({}, 'Favorites page', Paths.Favorites);

    const preloadedState: Partial<RootState> = {
      app: {
        isLoading: false,
        error: null,
      },
      user: {
        user: null,
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
    };

    renderWithProviders(<App />, {
      preloadedState,
    });

    expect(screen.getByRole('heading', { name: 'Sign in' })).toBeInTheDocument();
  });

  it('should render FavoritesPage when user is authorized and path is "/favorites"', () => {
    window.history.pushState({}, 'Favorites page', Paths.Favorites);

    const preloadedState: Partial<RootState> = {
      app: {
        isLoading: false,
        error: null,
      },
      user: {
        user: {
          email: 'test@test.ru',
          name: 'Test User',
          avatarUrl: '',
          isPro: false,
          token: 'secret='
        },
        authorizationStatus: AuthorizationStatus.Auth,
      },
      offer: {
        city: 'Paris',
        sortParam: 'Popular',
        offers: [],
        nearbyOffers: [],
        fullOffer: null,
        favoriteOffers: [],
        isFavoriteOffersLoad: false,
        review: null,
        isReviewSending: false,
        comments: [],
      },
    };

    renderWithProviders(<App />, {
      preloadedState,
    });

    expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
  });

  it('should render NotFoundPage when path is unknown', () => {
    window.history.pushState({}, 'Not found', '/some-unknown-route');

    const preloadedState: Partial<RootState> = {
      app: {
        isLoading: false,
        error: null,
      },
      user: {
        user: null,
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
    };

    renderWithProviders(<App />, {
      preloadedState,
    });

    expect(screen.getByText('Страница не найдена')).toBeInTheDocument();
  });
});
