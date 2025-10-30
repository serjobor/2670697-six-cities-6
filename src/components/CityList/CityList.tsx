import { useState } from 'react';
import { CityOffer } from '../../mocks/offers';

interface CityListProps {
  changeChooseCity: (chooseCity: string) => void;
}

const CityList = ({ changeChooseCity }: CityListProps) => {

  const [isChooseCity, setChooseCity] = useState<CityOffer>(CityOffer.PARIS);

  const handelChooseCity = (city: CityOffer) => {
    setChooseCity(city);
    changeChooseCity(city);
  };

  return (
    <>
      <li className='locations__item' onClick={() => handelChooseCity(CityOffer.PARIS)}>
        <a className={`locations__item-link tabs__item ${(isChooseCity === CityOffer.PARIS) ? 'tabs__item--active' : ''}`}>
          <span>{CityOffer.PARIS}</span>
        </a>
      </li>
      <li className='locations__item' onClick={() => handelChooseCity(CityOffer.COLOGNE)}>
        <a className={`locations__item-link tabs__item ${(isChooseCity === CityOffer.COLOGNE) ? 'tabs__item--active' : ''}`}>
          <span>{CityOffer.COLOGNE}</span>
        </a>
      </li>
      <li className='locations__item' onClick={() => handelChooseCity(CityOffer.BRUSSELS)}>
        <a className={`locations__item-link tabs__item ${(isChooseCity === CityOffer.BRUSSELS) ? 'tabs__item--active' : ''}`}>
          <span>{CityOffer.BRUSSELS}</span>
        </a>
      </li>
      <li className='locations__item' onClick={() => handelChooseCity(CityOffer.AMSTERDAM)}>
        <a className={`locations__item-link tabs__item ${(isChooseCity === CityOffer.AMSTERDAM) ? 'tabs__item--active' : ''}`}>
          <span>{CityOffer.AMSTERDAM}</span>
        </a>
      </li>
      <li className='locations__item' onClick={() => handelChooseCity(CityOffer.HAMBURG)}>
        <a className={`locations__item-link tabs__item ${(isChooseCity === CityOffer.HAMBURG) ? 'tabs__item--active' : ''}`}>
          <span>{CityOffer.HAMBURG}</span>
        </a>
      </li>
      <li className='locations__item' onClick={() => handelChooseCity(CityOffer.DUSSELDORF)}>
        <a className={`locations__item-link tabs__item ${(isChooseCity === CityOffer.DUSSELDORF) ? 'tabs__item--active' : ''}`}>
          <span>{CityOffer.DUSSELDORF}</span>
        </a>
      </li>
    </>
  );
};

export default CityList;
