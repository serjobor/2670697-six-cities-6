import { useEffect } from 'react';
import Header from '../../components/Header';
import OffersFavoritesList from '../../components/OffersFavoritesList';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchFavoriteOffers } from '../../store/api-actions';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constants';
import { getFavoriteoffers, getIsFavoriteoffersLoad } from '../../store/selectors/offerSelectors';

function FavoritesPage() {
  const dispatch = useAppDispatch();

  const favoriteoffers = useAppSelector(getFavoriteoffers);
  const isFavoriteoffersLoad = useAppSelector(getIsFavoriteoffersLoad);

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch]);

  const favoriteOffersCount = favoriteoffers.length;
  const isOffers: boolean = favoriteOffersCount > 0;

  if(isFavoriteoffersLoad) {
    return (
      <Spinner />
    );
  }

  return (
    <div className={`page ${isOffers ? '' : 'page--favorites-empty'} `}>
      <Header />

      <main className={`page__main page__main--favorites ${isOffers ? '' : 'page__main--favorites-empty'} `}>
        <div className='page__favorites-container container'>
          {
            (isOffers) ?
              <section className='favorites'>
                <h1 className='favorites__title'>Saved listing</h1>
                <OffersFavoritesList />
              </section>
              :
              <section className='favorites favorites--empty'>
                <h1 className='visually-hidden'>Favorites (empty)</h1>
                <div className='favorites__status-wrapper'>
                  <b className='favorites__status'>Nothing yet saved.</b>
                  <p className='favorites__status-description'>Save properties to narrow down search or plan your future trips.</p>
                </div>
              </section>
          }
        </div>
      </main>
      <footer className='footer container'>
        <Link to={PATHS.MAIN_PAGE} className='footer__logo-link'>
          <img className='footer__logo' src='img/logo.svg' alt='6 cities logo' width='64' height='33' />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
