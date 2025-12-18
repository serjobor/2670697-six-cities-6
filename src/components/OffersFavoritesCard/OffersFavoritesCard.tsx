import { Link } from 'react-router-dom';
import { CardDisplayStyle, displayOptionOrientation } from '../../constants/offers';
import { IBaseOffer } from '../../types/offers';
import OfferCard from '../OfferCard';
import { Paths } from '../../constants';

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
          <Link className='locations__item-link' to={Paths.Main}>
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
              cardDisplayStyle ={CardDisplayStyle.Favorites}
              variant={displayOptionOrientation.horizontal}
            />
          ))
        }
      </div>
    </li>
  );
};

export default OffersFavoritesCard;
