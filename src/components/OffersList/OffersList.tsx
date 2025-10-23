import { displayOptionForOfferCard } from '../../constants/offers';
import { IBaseOffer } from '../../mocks/offers';
import OfferCard from '../OfferCard';

interface OffersListProps {
  offers: IBaseOffer[];
}

const OffersList = ({ offers }: OffersListProps) => (
  <>
    {
      offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          variant={displayOptionForOfferCard.vertical}
        />
      ))
    }
  </>
);

export default OffersList;
