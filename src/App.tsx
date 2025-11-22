import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import LoginPage from './pages/LoginPage/LoginPage';
import OfferPage from './pages/OfferPage';
import PrivateRoute from './components/PrivateRoute';

import { PATHS } from './constants/paths';
import { offerSlice } from './store/reducers/offerSlice';
import { useAppDispatch } from './hooks/redux';
import { useEffect } from 'react';
import { mockOffers } from './mocks/offers';

function App() {
  const { setOffers } = offerSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setOffers(mockOffers));
  }, [dispatch, setOffers]);

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
