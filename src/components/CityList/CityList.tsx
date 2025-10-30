import { useState } from 'react';

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

  const handelChooseCity = (city: string) => {
    setChooseCity(city);
    changeChooseCity(city);
  };

  const chooseCityCheck = (city: string) => isChooseCity === city ? 'tabs__item--active' : '';

  return (
    <>
      <li className='locations__item' onClick={() => handelChooseCity(CityOffer.PARIS)}>
        <a className={`locations__item-link tabs__item ${chooseCityCheck(CityOffer.PARIS)}`}>
          <span>{CityOffer.PARIS}</span>
        </a>
      </li>
      <li className='locations__item' onClick={() => handelChooseCity(CityOffer.COLOGNE)}>
        <a className={`locations__item-link tabs__item ${chooseCityCheck(CityOffer.COLOGNE)}`}>
          <span>{CityOffer.COLOGNE}</span>
        </a>
      </li>
      <li className='locations__item' onClick={() => handelChooseCity(CityOffer.BRUSSELS)}>
        <a className={`locations__item-link tabs__item ${chooseCityCheck(CityOffer.BRUSSELS)}`}>
          <span>{CityOffer.BRUSSELS}</span>
        </a>
      </li>
      <li className='locations__item' onClick={() => handelChooseCity(CityOffer.AMSTERDAM)}>
        <a className={`locations__item-link tabs__item ${chooseCityCheck(CityOffer.AMSTERDAM)}`}>
          <span>{CityOffer.AMSTERDAM}</span>
        </a>
      </li>
      <li className='locations__item' onClick={() => handelChooseCity(CityOffer.HAMBURG)}>
        <a className={`locations__item-link tabs__item ${chooseCityCheck(CityOffer.HAMBURG)}`}>
          <span>{CityOffer.HAMBURG}</span>
        </a>
      </li>
      <li className='locations__item' onClick={() => handelChooseCity(CityOffer.DUSSELDORF)}>
        <a className={`locations__item-link tabs__item ${chooseCityCheck(CityOffer.DUSSELDORF)}`}>
          <span>{CityOffer.DUSSELDORF}</span>
        </a>
      </li>
    </>
  );
};

export default CityList;
