import { displayOptionOrientation } from '../../constants/offers';
import { IBaseOffer } from '../../types/offers';
import OfferCard from '../OfferCard';

interface OffersListProps {
  offers: IBaseOffer[];
  cardDisplayStyle : string;
  onItemHover?: (itemName: string) => void;
}

const OffersList = ({ offers, cardDisplayStyle , onItemHover }: OffersListProps) => {
  const handleListItemHover = (itemName: string) => {
    onItemHover?.(itemName);
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
            onItemHover={handleListItemHover}
          />
        ))
      }
    </>
  );
};

export default OffersList;
