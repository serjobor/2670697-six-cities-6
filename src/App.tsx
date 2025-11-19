import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import LoginPage from './pages/LoginPage/LoginPage';
import OfferPage from './pages/OfferPage';
import PrivateRoute from './components/PrivateRoute';
import { PATHS } from './constants/paths';
import { CITY_LIST_OPTIONS } from './constants/offers';

import { IBaseOffer } from './types/offers';
import { mockOffers } from './mocks/offers';
import { createContext } from 'react';

interface IStore {
  isAuth: boolean;
  mockOffers: IBaseOffer[];
  CITY_LIST_OPTIONS: readonly string[];
}

const isAuth: boolean = true;

export const MyContext = createContext<IStore>({
  isAuth,
  mockOffers,
  CITY_LIST_OPTIONS,
});

function App() {

  return (
    <MyContext.Provider value={{ isAuth, mockOffers, CITY_LIST_OPTIONS }}>
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
    </MyContext.Provider>
  );
}

export default App;
