import { CITY_LIST_OPTIONS } from '../../constants/offers';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import { offerSlice } from '../../store/reducers/offerSlice';

const CityList = () => {
  const isChooseCity = useAppSelector((state) => state.offer.city);

  const { setCity } = offerSlice.actions;
  const dispatch = useDispatch();

  const handleChooseCity = (city: string) => {
    dispatch(setCity(city));
  };

  const chooseCityCheck = (city: string) => isChooseCity === city ? 'tabs__item--active' : '';

  return (
    <>
      {
        CITY_LIST_OPTIONS.map((city) => (
          <li
            key={city}
            className='locations__item'
            onClick={() => handleChooseCity(city)}
          >
            <a className={`locations__item-link tabs__item ${chooseCityCheck(city)}`}>
              <span>{city}</span>
            </a>
          </li>
        ))
      }
    </>
  );
};

export default CityList;
