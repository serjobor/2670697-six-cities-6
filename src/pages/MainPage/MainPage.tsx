import { useContext, useState } from 'react';
import OffersList from '../../components/OffersList';
import CityList from '../../components/CityList';
import { IBaseOffer, ICity } from '../../mocks/offers';
import Header from '../../components/Header';
import { MyContext } from '../../App';
import { CITY_LIST_TYPES, OFFER_SORT_OPTIONS, OFFER_SORT_TYPES } from '../../constants/offers';
import Map from '../../components/Map';

function MainPage() {

  const [isOpenSortList, setOpenSortList] = useState<string>('');
  const [sortParam, setSortsortParam] = useState<string>(OFFER_SORT_TYPES.POPULAR);

  const [isChooseCity, setChooseCity] = useState<string>(CITY_LIST_TYPES.PARIS);

  const [selectedPoint, setSelectedPoint] = useState<IBaseOffer>({} as IBaseOffer);

  const { mockOffers } = useContext(MyContext);

  const OFFERS_SORT_LIST: IBaseOffer[] = mockOffers.filter((offers) => offers.city.name === isChooseCity);
  const chooseCityData: ICity = OFFERS_SORT_LIST[0].city;
  const offerCount: number = OFFERS_SORT_LIST.length;

  const isOffersInChooseCity: boolean = offerCount > 0;

  const showSortList = () => {
    if (isOpenSortList === '') {
      setOpenSortList('places__options--opened');
    } else {
      setOpenSortList('');
    }
  };

  const handleSortParamClick = (chooseSortParam: string) => {
    setSortsortParam(chooseSortParam);
    showSortList();
  };

  const sortParamCheck = (chooseSortParam: string) => sortParam === chooseSortParam ? 'places__option--active' : '';

  const changeChooseCity = (chooseCity: string) => {
    setChooseCity(chooseCity);
    setSortsortParam(OFFER_SORT_TYPES.POPULAR);
    setSelectedPoint({} as IBaseOffer);
  };

  const handleIsItemHover = (itemName: string) => {
    const currentPoint: IBaseOffer | undefined = OFFERS_SORT_LIST.find((point) =>
      point.id === itemName,
    );
    if(currentPoint !== undefined) {
      setSelectedPoint(currentPoint);
    }
  };

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
              <CityList changeChooseCity={changeChooseCity} />
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
                  <form className='places__sorting' action='#' method='get'>
                    <span className='places__sorting-caption'>Sort by</span>
                    <span
                      className='places__sorting-type'
                      tabIndex={0}
                      onClick={showSortList}
                    >{sortParam}
                      <svg className='places__sorting-arrow' width='7' height='4'>
                        <use href='#icon-arrow-select'></use>
                      </svg>
                    </span>
                    <ul
                      className={`places__options places__options--custom ${isOpenSortList}`}
                    >
                      {
                        OFFER_SORT_OPTIONS.map((optionParam) => (
                          <li
                            key={optionParam}
                            className={`places__option ${sortParamCheck(optionParam)}`}
                            tabIndex={0}
                            onClick={() => handleSortParamClick(optionParam)}
                          >{optionParam}
                          </li>
                        )
                        )
                      }
                    </ul>
                  </form>
                  <div className='cities__places-list places__list tabs__content'>
                    <OffersList
                      offers={OFFERS_SORT_LIST}
                      sortParam={sortParam}
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
