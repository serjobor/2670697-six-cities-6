import OffersFavoritesCard from '../OffersFavoritesCard';
import { CITY_LIST_OPTIONS } from '../../constants/offers';
import { useAppSelector } from '../../hooks/redux';


const OffersFavoritesList = () => {
  const { offers } = useAppSelector((state) => state.offer);

  return (
    <ul className='favorites__list'>
      {
        CITY_LIST_OPTIONS.map((cityName) => (
          <OffersFavoritesCard
            key={cityName}
            cityName={cityName}
            sortOffersByCityName={
              offers.filter((offer) => offer.city.name === cityName)
            }
          />
        ))
      }
    </ul>
  );
};

export default OffersFavoritesList;
