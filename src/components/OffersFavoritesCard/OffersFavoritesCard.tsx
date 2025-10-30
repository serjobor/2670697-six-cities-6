import { displayOptionForOfferCard } from '../../constants/offers';
import { IBaseOffer } from '../../mocks/offers';
import OfferCard from '../OfferCard';

interface OffersFavoritesCardProps {
  cityName: string;
  sortOffersByCityName: IBaseOffer[];
}

const OffersFavoritesCard = ({ cityName, sortOffersByCityName }: OffersFavoritesCardProps) => {

  const sortOffersByIsFavorite: IBaseOffer[] = sortOffersByCityName.filter((offers) => offers.isFavorite === true);

  if(sortOffersByIsFavorite.length === 0) {
    return;
  }

  return (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <a className='locations__item-link' href='#'>
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className='favorites__places'>
        {
          sortOffersByIsFavorite.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              variant={displayOptionForOfferCard.horizontal}
            />
          ))
        }
      </div>
    </li>
  );
};

export default OffersFavoritesCard;
