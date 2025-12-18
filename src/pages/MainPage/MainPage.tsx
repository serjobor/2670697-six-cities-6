import { useCallback, useState } from 'react';
import OffersList from '../../components/OffersList';
import CityList from '../../components/CityList';
import { IBaseOffer } from '../../types/offers';
import Header from '../../components/Header';
import { cardNameForDisplayStyles } from '../../constants/offers';
import Map from '../../components/Map';
import { useAppSelector } from '../../hooks/redux';
import SortOffersByParam from '../../components/SortOffersByParam';
import { getCity, getSortedOffersByCity } from '../../store/selectors/offerSelectors';
import OffersEmpty from '../../components/OffersEmpty';

function MainPage() {
  const city = useAppSelector(getCity);
  const sortedOffers = useAppSelector(getSortedOffersByCity);
  const cityData = sortedOffers[0]?.city;
  const offerCount: number = sortedOffers.length;
  const isOffersInChooseCity: boolean = offerCount > 0;

  const [selectedPoint, setSelectedPoint] = useState<IBaseOffer | null>(null);

  const handleIsItemHover = useCallback((itemName: string) => {
    if (itemName === '') {
      setSelectedPoint(null);
    } else {
      setSelectedPoint(sortedOffers.find((point) => point.id === itemName) ?? null);
    }
  }, [sortedOffers]);

  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className={`
        page__main 
        page__main--index 
        ${isOffersInChooseCity ? '' : 'page__main--index-empty'} 
    `}>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <ul className='locations__list tabs__list'>
              <CityList />
            </ul>
          </section>
        </div>
        <div className='cities'>
          <div className={`
              cities__places-container 
              container
              ${isOffersInChooseCity ? '' : 'cities__places-container--empty'} 
        `}>
            {
              isOffersInChooseCity
                ?
                <section className='cities__places places'>
                  <h2 className='visually-hidden'>Places</h2>
                  <b className='places__found'>{offerCount} places to stay in {city}</b>
                  <SortOffersByParam />
                  <div className='cities__places-list places__list tabs__content'>
                    <OffersList
                      offers={sortedOffers}
                      cardNameForDisplayStyles={cardNameForDisplayStyles.CITIES}
                      isItemHover={handleIsItemHover}
                    />
                  </div>
                </section>
                :
                <OffersEmpty city={city}/>
            }
            <div className='cities__right-section'>
              {
                isOffersInChooseCity
                  ?
                  <Map
                    namePage='MainPage'
                    city={cityData}
                    points={sortedOffers}
                    selectedPoint={selectedPoint}
                  />
                  :
                  ''
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
