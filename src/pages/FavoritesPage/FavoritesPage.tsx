import Header from '../../components/Header';
import OffersFavoritesList from '../../components/OffersFavoritesList';
import { useAppSelector } from '../../hooks/redux';

function FavoritesPage() {
  const offers = useAppSelector(state => state.offer.offers);

  const favoriteOffersCount = offers.filter((offer) => offer.isFavorite === true).length;

  const isOffers: boolean = favoriteOffersCount > 0;

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
        <a className='footer__logo-link' href='main.html'>
          <img className='footer__logo' src='img/logo.svg' alt='6 cities logo' width='64' height='33' />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
