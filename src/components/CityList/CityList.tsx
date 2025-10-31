import { useState } from 'react';
import { CITY_LIST } from '../../mocks/offers';

interface CityListProps {
  changeChooseCity: (chooseCity: string) => void;
}

const CityOffer = {
  'PARIS': 'Paris',
  'COLOGNE': 'Cologne',
  'BRUSSELS': 'Brussels',
  'AMSTERDAM': 'Amsterdam',
  'HAMBURG': 'Hamburg',
  'DUSSELDORF': 'Dusseldorf',
} as const;

const CityList = ({ changeChooseCity }: CityListProps) => {

  const [isChooseCity, setChooseCity] = useState<string>(CityOffer.PARIS);

  const handleChooseCity = (city: string) => {
    setChooseCity(city);
    changeChooseCity(city);
  };

  const chooseCityCheck = (city: string) => isChooseCity === city ? 'tabs__item--active' : '';

  return (
    <>
      {
        CITY_LIST.map((city) => (
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
