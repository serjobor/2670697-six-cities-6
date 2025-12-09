import { useNavigate, useParams } from 'react-router-dom';
import CommentSubmitForm from '../../components/CommentSubmitForm';
import Header from '../../components/Header';
import { useEffect, useState } from 'react';
import { mockOffersNearby } from '../../mocks/offers';
import { mockReviews } from '../../mocks/reviews';
import { IBaseOffer } from '../../types/offers';
import { IReviews } from '../../types/reviews';
import { PATHS } from '../../constants';
import Map from '../../components/Map';
import ReviewsList from '../../components/ReviewsList';
import OffersList from '../../components/OffersList';
import { cardNameForDisplayStyles } from '../../constants/offers';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { AuthorizationStatus } from '../../constants';
import { fetchOfferById } from '../../store/api-actions';
import Spinner from '../../components/Spinner';

function OfferPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferById(id));
    }
  }, [dispatch, id]);

  const { authorizationStatus } = useAppSelector((state) => state.user);
  const { fullOffer } = useAppSelector((state) => state.offer);

  const [isClickOnBookmarkBtn, setIsClickOnBookmarkBtn] = useState<string>((fullOffer?.isFavorite) ? 'offer__bookmark-button--active' : '');
  const [selectedPoint, setSelectedPoint] = useState<IBaseOffer>({} as IBaseOffer);

  if (!fullOffer) {
    return (
      <Spinner />
    );
  }

  // const offer: IFullOffer = mockOffersById;
  const reviews: IReviews[] = mockReviews;
  const reviewsCount: number = reviews.length;

  const offerGallery: string[] = fullOffer.images.slice(0, 6) || [];

  const raitingCount = (raiting: number): string => `${Math.round(raiting) * 100 / 5}%`;

  const handleIsItemHover = (itemName: string) => {
    const currentPoint: IBaseOffer | undefined = mockOffersNearby.find((point) =>
      point.id === itemName,
    );
    if (currentPoint !== undefined) {
      setSelectedPoint(currentPoint);
    }
  };

  const handleBookmarkBtnClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(PATHS.LOGIN_PAGE);
      return;
    }

    if (isClickOnBookmarkBtn === '') {
      setIsClickOnBookmarkBtn('offer__bookmark-button--active');
    } else {
      setIsClickOnBookmarkBtn('');
    }
  };

  return (
    <div className='page'>
      <Header />

      <main className='page__main page__main--offer'>
        <section className='offer'>
          <div className='offer__gallery-container container'>
            <div className='offer__gallery'>
              {
                offerGallery.map((pathToImg) => (
                  <div className='offer__image-wrapper' key={pathToImg}>
                    <img className='offer__image' src={pathToImg} alt='Photo studio' />
                  </div>
                ))
              }
            </div>
          </div>
          <div className='offer__container container'>
            <div className='offer__wrapper'>
              {
                fullOffer.isPremium && (
                  <div className='offer__mark'>
                    <span>Premium</span>
                  </div>
                )
              }
              <div className='offer__name-wrapper'>
                <h1 className='offer__name'>
                  {fullOffer.title}
                </h1>
                <button
                  className={`
                    offer__bookmark-button
                    ${isClickOnBookmarkBtn}
                    button`}
                  type='button'
                  onClick={handleBookmarkBtnClick}
                >
                  <svg className='offer__bookmark-icon' width='31' height='33'>
                    <use href='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>To bookmarks</span>
                </button>
              </div>
              <div className='offer__rating rating'>
                <div className='offer__stars rating__stars'>
                  <span style={{ width: raitingCount(fullOffer.rating) }}></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='offer__rating-value rating__value'>{fullOffer.rating}</span>
              </div>
              <ul className='offer__features'>
                <li className='offer__feature offer__feature--entire'>
                  {fullOffer.type}
                </li>
                <li className='offer__feature offer__feature--bedrooms'>
                  {fullOffer.bedrooms} Bedrooms
                </li>
                <li className='offer__feature offer__feature--adults'>
                  Max {fullOffer.maxAdults} adults
                </li>
              </ul>
              <div className='offer__price'>
                <b className='offer__price-value'>&euro;{fullOffer.price}</b>
                <span className='offer__price-text'>&nbsp;night</span>
              </div>
              <div className='offer__inside'>
                <h2 className='offer__inside-title'>What&apos;s inside</h2>
                <ul className='offer__inside-list'>
                  {
                    fullOffer.goods && fullOffer.goods.map((item) => (
                      <li className='offer__inside-item' key={item}>
                        {item}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className='offer__host'>
                <h2 className='offer__host-title'>Meet the host</h2>
                <div className='offer__host-user user'>
                  <div className='offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper'>
                    <img className='offer__avatar user__avatar' src={fullOffer.host.avatarUrl} width='74' height='74' alt='Host avatar' />
                  </div>
                  <span className='offer__user-name'>
                    {fullOffer.host.name}
                  </span>
                  <span className='offer__user-status'>
                    {
                      fullOffer.host.isPro && ('Pro')
                    }
                  </span>
                </div>
                <div className='offer__description'>
                  <p className='offer__text'>
                    {fullOffer.description}
                  </p>
                </div>
              </div>
              <section className='offer__reviews reviews'>
                <h2 className='reviews__title'>Reviews &middot;
                  <span className='reviews__amount'>{reviewsCount}</span>
                </h2>
                <ReviewsList reviews={reviews} />
                <CommentSubmitForm />
              </section>
            </div>
          </div>
          <Map
            namePage='OfferPage'
            city={fullOffer.city}
            points={mockOffersNearby}
            selectedPoint={selectedPoint}
          />
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>Other places in the neighbourhood</h2>
            <div className='near-places__list places__list'>
              {
                <OffersList
                  offers={mockOffersNearby}
                  cardNameForDisplayStyles={cardNameForDisplayStyles.NEAR_PLACES}
                  isItemHover={handleIsItemHover}
                />
              }
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
