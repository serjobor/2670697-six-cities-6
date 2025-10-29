import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import LoginPage from './pages/LoginPage/LoginPage';
import OfferPage from './pages/OfferPage';
import PrivateRoute from './components/PrivateRoute';
import { PATHS } from './constants/paths';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path={PATHS.FAVORITES_PAGE} element={<FavoritesPage />} />
        </Route>

        <Route path={PATHS.LOGIN_PAGE} element={<LoginPage />} />
        <Route path={PATHS.MAIN_PAGE} element={<MainPage />} />
        <Route path={PATHS.OFFER_PAGE} element={<OfferPage />} />

        <Route path={PATHS.OFFER_PAGE} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
