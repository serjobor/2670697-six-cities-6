import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import LoginPage from './pages/LoginPage/LoginPage';
import OfferPage from './pages/OfferPage';
import PrivateRoute from './components/PrivateRoute';

import { Paths } from './constants';
import { useAppSelector } from './hooks/redux';
import { AuthorizationStatus } from './constants';
import Spinner from './components/Spinner';
import { getAppLoadingStatus } from './store/selectors/appSelectors';
import { getAuthorizationStatus } from './store/selectors/userSelectors';

function App() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isLoading = useAppSelector(getAppLoadingStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isLoading) {
    return (
      <Spinner />
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path={Paths.Favorites} element={<FavoritesPage />} />
        </Route>

        <Route path={Paths.Login} element={<LoginPage />} />
        <Route path={Paths.Main} element={<MainPage />} />
        <Route path={Paths.Offer} element={<OfferPage />} />

        <Route path={Paths.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
