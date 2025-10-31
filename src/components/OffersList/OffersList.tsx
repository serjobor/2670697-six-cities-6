import { useEffect, useState } from 'react';
import { displayOptionForOfferCard, OFFER_SORT_TYPES } from '../../constants/offers';
import { IBaseOffer } from '../../mocks/offers';
import OfferCard from '../OfferCard';

interface OffersListProps {
  offers: IBaseOffer[];
  sortParam: string;
}

const OffersList = ({ offers, sortParam }: OffersListProps) => {

  const [sortOffersByParam, setSortOffersByParam] = useState<IBaseOffer[]>(offers);

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
            variant={displayOptionForOfferCard.vertical}
          />
        ))
      }
    </>
  );
};

export default OffersList;
