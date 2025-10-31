import { useContext } from 'react';
import OffersFavoritesCard from '../OffersFavoritesCard';
import { MyContext } from '../../App';


const OffersFavoritesList = () => {

  const { mockOffers, CITY_LIST_OPTIONS } = useContext(MyContext);

  return (
    <ul className='favorites__list'>
      {
        CITY_LIST_OPTIONS.map((cityName) => (
          <OffersFavoritesCard
            key={cityName}
            cityName={cityName}
            sortOffersByCityName={
              mockOffers.filter((offers) => offers.city.name === cityName)
            }
          />
        ))
      }
    </ul>
  );
};

export default OffersFavoritesList;
