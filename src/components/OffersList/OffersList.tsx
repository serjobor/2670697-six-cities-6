import { displayOptionOrientation } from '../../constants/offers';
import { IBaseOffer } from '../../types/offers';
import OfferCard from '../OfferCard';

interface OffersListProps {
  offers: IBaseOffer[];
  cardDisplayStyle : string;
  isItemHover?: (itemName: string) => void;
}

const OffersList = ({ offers, cardDisplayStyle , isItemHover }: OffersListProps) => {
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
            cardDisplayStyle ={cardDisplayStyle }
            variant={displayOptionOrientation.vertical}
            isItemHover={handleListItemHover}
          />
        ))
      }
    </>
  );
};

export default OffersList;
