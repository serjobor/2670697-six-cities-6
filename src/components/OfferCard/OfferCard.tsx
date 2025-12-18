import { Link, useNavigate } from 'react-router-dom';
import { IBaseOffer, IDisplayOption } from '../../types/offers';
import { Paths } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { AuthorizationStatus } from '../../constants';
import { changeFavoriteStatusOffer, fetchFavoriteOffers } from '../../store/api-actions';
import { processErrorHandle } from '../../services/process-error-handle';
import { memo, useState } from 'react';
import { getAuthorizationStatus } from '../../store/selectors/userSelectors';

interface OfferCardProps {
  offer: IBaseOffer;
  cardDisplayStyle : string;
  variant: IDisplayOption;
  isItemHover?: (itemName: string) => void;
}

const OfferCard = memo(({ offer, cardDisplayStyle , variant, isItemHover }: OfferCardProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const [isClickOnBookmarkBtn, setIsClickOnBookmarkBtn] = useState<string>((offer.isFavorite) ? 'place-card__bookmark-button--active' : '');

  const handleBookmarkBtnClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(Paths.Login);
      return;
    }

    const nextStatus = isClickOnBookmarkBtn === '' ? 1 : 0;

    dispatch(changeFavoriteStatusOffer({ id: offer.id, status: nextStatus }))
      .unwrap()
      .then(() => {
        setIsClickOnBookmarkBtn(nextStatus === 1 ? 'place-card__bookmark-button--active' : '');
        dispatch(fetchFavoriteOffers());
      })
      .catch(() => {
        processErrorHandle(nextStatus === 1 ? 'не удалось добавить в избранное' : 'не удалось удалить из избранного');
      });
  };

  const handleMouseEnter = () => {
    isItemHover?.(offer.id);
  };

  const handleMouseLeave = () => {
    isItemHover?.('');
  };

  const raitingCount = (raiting: number): string => `${Math.round(raiting) * 100 / 5}%`;

  return (
    <article
      className={`${cardDisplayStyle }__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {
        offer.isPremium && (
          <div className='place-card__mark'>
            <span>Premium</span>
          </div>
        )
      }

      <div className={`${cardDisplayStyle }__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className='place-card__image'
            src={offer.previewImage}
            width={variant.widthForImg}
            height={variant.heightForImg}
            alt='Place image'
          />
        </Link>
      </div>
      <div className={`${(cardDisplayStyle  === 'favorites') ? 'favorites__card-info' : ''} place-card__info`}>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{offer.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button
            className={`
              place-card__bookmark-button 
              ${isClickOnBookmarkBtn}
              button`}
            type='button'
            onClick={handleBookmarkBtnClick}
          >
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use href='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: raitingCount(offer.rating) }}></span>
            <span className='visually-hidden'>{offer.rating}</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className='place-card__type'>{offer.type}</p>
      </div>
    </article>
  );
});

OfferCard.displayName = 'OfferCard';
export default OfferCard;
