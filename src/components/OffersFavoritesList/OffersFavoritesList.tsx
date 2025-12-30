import OffersFavoritesCard from '../OffersFavoritesCard';
import { CITY_LIST_OPTIONS } from '../../constants/offers';
import { useAppSelector } from '../../hooks/redux';
import { getOffers } from '../../store/selectors/offerSelectors';


const OffersFavoritesList = () => {
  const offers = useAppSelector(getOffers);

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
