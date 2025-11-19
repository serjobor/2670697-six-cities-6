import { Link } from 'react-router-dom';
import { cardNameForDisplayStyles, displayOptionOrientation } from '../../constants/offers';
import { IBaseOffer } from '../../types/offers';
import OfferCard from '../OfferCard';
import { PATHS } from '../../constants/paths';

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
          <Link className='locations__item-link' to={PATHS.MAIN_PAGE}>
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className='favorites__places'>
        {
          sortOffersByIsFavorite.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              cardNameForDisplayStyles={cardNameForDisplayStyles.FAVORITES}
              variant={displayOptionOrientation.horizontal}
            />
          ))
        }
      </div>
    </li>
  );
};

export default OffersFavoritesCard;
