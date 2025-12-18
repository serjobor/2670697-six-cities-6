import { displayOptionOrientation } from '../../constants/offers';
import { IBaseOffer } from '../../types/offers';
import OfferCard from '../OfferCard';

interface OffersListProps {
  offers: IBaseOffer[];
  cardNameForDisplayStyles: string;
  isItemHover?: (itemName: string) => void;
}

const OffersList = ({ offers, cardNameForDisplayStyles, isItemHover }: OffersListProps) => {
  const handleListItemHover = (itemName: string) => {
    isItemHover?.(itemName);
  };

  return (
    <>
      {
        offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            cardNameForDisplayStyles={cardNameForDisplayStyles}
            variant={displayOptionOrientation.vertical}
            isItemHover={handleListItemHover}
          />
        ))
      }
    </>
  );
};

export default OffersList;
