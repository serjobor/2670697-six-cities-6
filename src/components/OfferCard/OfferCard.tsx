import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IBaseOffer } from '../../types/offers';
import { IDisplayOption } from '../../constants/offers';
import { PATHS } from '../../constants/paths';
import { useAppSelector } from '../../hooks/redux';
import { AuthorizationStatus } from '../../constants/user';

interface OfferCardProps {
  offer: IBaseOffer;
  cardNameForDisplayStyles: string;
  variant: IDisplayOption;
  isItemHover?: (itemName: string) => void;
}

const OfferCard = ({ offer, cardNameForDisplayStyles, variant, isItemHover }: OfferCardProps) => {
  const navigate = useNavigate();

  const { authorizationStatus } = useAppSelector((state) => state.user);

  // const [isHover, setHover] = useState<boolean>(false);
  const [isClickOnBookmarkBtn, setIsClickOnBookmarkBtn] = useState<string>((offer.isFavorite) ? 'place-card__bookmark-button--active' : '');

  const handleBookmarkBtnClick = () => {
    if(authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(PATHS.LOGIN_PAGE);
      return;
    }

    if(isClickOnBookmarkBtn === '') {
      setIsClickOnBookmarkBtn('place-card__bookmark-button--active');
    }else {
      setIsClickOnBookmarkBtn('');
    }
  };

  const handleMouseEnter = () => {
    isItemHover?.(offer.id);
    // setHover(true);
  };

  const handleMouseLeave = () => {
    // console.log(`Покинул ${offer.id}`);
    // setHover(false);
  };

  const raitingCount = (raiting: number): string => `${Math.round(raiting) * 100 / 5}%`;

  return (
    <article
      className={`${cardNameForDisplayStyles}__card place-card`}
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

      <div className={`${cardNameForDisplayStyles}__image-wrapper place-card__image-wrapper`}>
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
      <div className={`${(cardNameForDisplayStyles === 'favorites') ? 'favorites__card-info' : ''} place-card__info`}>
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
};

export default OfferCard;
