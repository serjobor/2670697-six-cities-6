import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import LoginPage from './pages/LoginPage/LoginPage';
import OfferPage from './pages/OfferPage';
import PrivateRoute from './components/PrivateRoute';

import { PATHS } from './constants';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { useEffect } from 'react';
import { checkAuthStatus, fetchOffers } from './store/api-actions';
import { AuthorizationStatus } from './constants';
import Spinner from './components/Spinner';

function App() {
  const dispatch = useAppDispatch();

  const { authorizationStatus } = useAppSelector((state) => state.user);
  const { isLoading } = useAppSelector((state) => state.app);

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);


  if (authorizationStatus === AuthorizationStatus.Unknown || isLoading) {
    return (
      <Spinner />
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path={PATHS.FAVORITES_PAGE} element={<FavoritesPage />} />
        </Route>

        <Route path={PATHS.LOGIN_PAGE} element={<LoginPage />} />
        <Route path={PATHS.MAIN_PAGE} element={<MainPage />} />
        <Route path={PATHS.OFFER_PAGE} element={<OfferPage />} />

        <Route path={PATHS.NOTFOUND_PAGE} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
