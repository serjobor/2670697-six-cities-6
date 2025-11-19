import { useEffect, useState } from 'react';
import { displayOptionOrientation, OFFER_SORT_TYPES } from '../../constants/offers';
import { IBaseOffer } from '../../types/offers';
import OfferCard from '../OfferCard';

interface OffersListProps {
  offers: IBaseOffer[];
  sortParam?: string;
  cardNameForDisplayStyles: string;
  isItemHover: (itemName: string) => void;
}

const OffersList = ({ offers, sortParam, cardNameForDisplayStyles, isItemHover }: OffersListProps) => {

  const [sortOffersByParam, setSortOffersByParam] = useState<IBaseOffer[]>(offers);

  const handleListItemHover = (itemName: string) => {
    isItemHover(itemName);
  };

  useEffect(() => {
    switch (sortParam) {
      case OFFER_SORT_TYPES.LOW_TO_HIGH:
        setSortOffersByParam(offers.sort((a, b) => a.price - b.price));
        break;

      case OFFER_SORT_TYPES.HIGH_TO_LOW:
        setSortOffersByParam(offers.sort((a, b) => b.price - a.price));
        break;

      case OFFER_SORT_TYPES.TOP_RAITING:
        setSortOffersByParam(offers.sort((a, b) => b.rating - a.rating));
        break;

      default:
        setSortOffersByParam(offers);
        break;
    }
  }, [offers, sortParam]);

  return (
    <>
      {
        sortOffersByParam.map((offer) => (
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
