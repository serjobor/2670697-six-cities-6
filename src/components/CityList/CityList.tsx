import { useState } from 'react';
import { CITY_LIST_OPTIONS, CITY_LIST_TYPES } from '../../constants/offers';

interface CityListProps {
  changeChooseCity: (chooseCity: string) => void;
}

const CityList = ({ changeChooseCity }: CityListProps) => {

  const [isChooseCity, setChooseCity] = useState<string>(CITY_LIST_TYPES.PARIS);

  const handleChooseCity = (city: string) => {
    setChooseCity(city);
    changeChooseCity(city);
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
