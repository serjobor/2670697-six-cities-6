import { useState } from 'react';
import OffersList from '../../components/OffersList';
import CityList from '../../components/CityList';
import { IBaseOffer, mockOffers } from '../../mocks/offers';
import Header from '../../components/Header';

function MainPage() {

  const [isOpenSortList, setOpenSortList] = useState<string>('');
  const [isChooseCity, setChooseCity] = useState<string>('Paris');

  const OFFERS_SORT_LIST: IBaseOffer[] = mockOffers.filter((offers) => offers.city.name === isChooseCity);
  const offerCount: number = OFFERS_SORT_LIST.length;

  const showSortList = () => {
    if(isOpenSortList === '') {
      setOpenSortList('places__options--opened');
    }else {
      setOpenSortList('');
    }
  };

  const changeChooseCity = (chooseCity: string) => {
    setChooseCity(chooseCity);
  };

  return (
    <div className='page page--gray page--main'>
      <Header/>

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <ul className='locations__list tabs__list'>
              <CityList changeChooseCity={changeChooseCity} />
            </ul>
          </section>
        </div>
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{offerCount} places to stay in {isChooseCity}</b>
              <form className='places__sorting' action='#' method='get'>
                <span className='places__sorting-caption'>Sort by</span>
                <span
                  className='places__sorting-type'
                  tabIndex={0}
                  onClick={showSortList}
                > Popular
                  <svg className='places__sorting-arrow' width='7' height='4'>
                    <use href='#icon-arrow-select'></use>
                  </svg>
                </span>
                <ul
                  className={`places__options places__options--custom ${isOpenSortList}`}
                >
                  <li className='places__option places__option--active' tabIndex={0}>Popular</li>
                  <li className='places__option' tabIndex={0}>Price: low to high</li>
                  <li className='places__option' tabIndex={0}>Price: high to low</li>
                  <li className='places__option' tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className='cities__places-list places__list tabs__content'>
                <OffersList
                  offers={OFFERS_SORT_LIST}
                />
              </div>

            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
