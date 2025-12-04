import { useState } from 'react';
import OffersList from '../../components/OffersList';
import CityList from '../../components/CityList';
import { IBaseOffer, ICity } from '../../types/offers';
import Header from '../../components/Header';
import { cardNameForDisplayStyles } from '../../constants/offers';
import Map from '../../components/Map';
import { useAppSelector } from '../../hooks/redux';
import SortOffersByParam from '../../components/SortOffersByParam';

function MainPage() {

  const { offers, error } = useAppSelector((state) => state.offer);
  const [selectedPoint, setSelectedPoint] = useState<IBaseOffer>({} as IBaseOffer);
  const isChooseCity: string = useAppSelector((state) => state.offer.city);
  const OFFERS_SORT_LIST: IBaseOffer[] = offers.filter((offer) => offer.city.name === isChooseCity);
  const chooseCityData: ICity = OFFERS_SORT_LIST[0]?.city;
  const offerCount: number = OFFERS_SORT_LIST.length;
  const isOffersInChooseCity: boolean = offerCount > 0;

  const handleIsItemHover = (itemName: string) => {
    const currentPoint: IBaseOffer | undefined = OFFERS_SORT_LIST.find((point) =>
      point.id === itemName,
    );
    if (currentPoint !== undefined) {
      setSelectedPoint(currentPoint);
    }
  };

  if (error) {
    return (
      <div>
        {error}
      </div>
    );
  }

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
                  <b className='places__found'>{offerCount} places to stay in {isChooseCity}</b>
                  <SortOffersByParam />
                  <div className='cities__places-list places__list tabs__content'>
                    <OffersList
                      offers={OFFERS_SORT_LIST}
                      cardNameForDisplayStyles={cardNameForDisplayStyles.CITIES}
                      isItemHover={handleIsItemHover}
                    />
                  </div>
                </section>
                :
                <section className='cities__no-places'>
                  <div className='cities__status-wrapper tabs__content'>
                    <b className='cities__status'>No places to stay available</b>
                    <p className='cities__status-description'>We could not find any property available at the moment in {isChooseCity}</p>
                  </div>
                </section>
            }
            <div className='cities__right-section'>
              {
                isOffersInChooseCity
                  ?
                  <Map
                    namePage='MainPage'
                    city={chooseCityData}
                    points={OFFERS_SORT_LIST}
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
