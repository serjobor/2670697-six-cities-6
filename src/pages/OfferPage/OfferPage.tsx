import { useNavigate } from 'react-router-dom';
import CommentSubmitForm from '../../components/CommentSubmitForm';
import Header from '../../components/Header';
import { useContext, useState } from 'react';
import { MyContext } from '../../App';
import { mockOffersById, mockOffersNearby } from '../../mocks/offers';
import { mockReviews } from '../../mocks/reviews';
import { IBaseOffer, IFullOffer } from '../../types/offers';
import { IReviews } from '../../types/reviews';
import { PATHS } from '../../constants/paths';
import Map from '../../components/Map';
import ReviewsList from '../../components/ReviewsList';
import OffersList from '../../components/OffersList';
import { cardNameForDisplayStyles } from '../../constants/offers';

function OfferPage() {
  const navigate = useNavigate();

  const { isAuth } = useContext(MyContext);

  // const { id } = useParams();
  // const offer: IFullOffer = mockOffers.find((offers) => offers.id === id);
  const offer: IFullOffer = mockOffersById;
  const reviews: IReviews[] = mockReviews;

  const reviewsCount: number = reviews.length;

  const mockOfferGallery = [
    'img/room.jpg',
    'img/apartment-01.jpg',
    'img/apartment-02.jpg',
    'img/apartment-03.jpg',
    'img/studio-01.jpg',
    'img/apartment-01.jpg',
  ];

  const offerGallery: string[] = offer.images.slice(0, 6) || mockOfferGallery;

  const [isClickOnBookmarkBtn, setIsClickOnBookmarkBtn] = useState<string>((offer.isFavorite) ? 'offer__bookmark-button--active' : '');

  const raitingCount = (raiting: number): string => `${Math.round(raiting) * 100 / 5}%`;

  const [selectedPoint, setSelectedPoint] = useState<IBaseOffer>({} as IBaseOffer);

  const handleIsItemHover = (itemName: string) => {
    const currentPoint: IBaseOffer | undefined = mockOffersNearby.find((point) =>
      point.id === itemName,
    );
    if (currentPoint !== undefined) {
      setSelectedPoint(currentPoint);
    }
  };


  const handleBookmarkBtnClick = () => {
    if (!isAuth) {
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
                offer.isPremium && (
                  <div className='offer__mark'>
                    <span>Premium</span>
                  </div>
                )
              }
              <div className='offer__name-wrapper'>
                <h1 className='offer__name'>
                  {offer.title}
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
                  <span style={{ width: raitingCount(offer.rating) }}></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='offer__rating-value rating__value'>{offer.rating}</span>
              </div>
              <ul className='offer__features'>
                <li className='offer__feature offer__feature--entire'>
                  {offer.type}
                </li>
                <li className='offer__feature offer__feature--bedrooms'>
                  {offer.bedrooms} Bedrooms
                </li>
                <li className='offer__feature offer__feature--adults'>
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className='offer__price'>
                <b className='offer__price-value'>&euro;{offer.price}</b>
                <span className='offer__price-text'>&nbsp;night</span>
              </div>
              <div className='offer__inside'>
                <h2 className='offer__inside-title'>What&apos;s inside</h2>
                <ul className='offer__inside-list'>
                  {
                    offer.goods && offer.goods.map((item) => (
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
                    <img className='offer__avatar user__avatar' src={offer.host.avatarUrl} width='74' height='74' alt='Host avatar' />
                  </div>
                  <span className='offer__user-name'>
                    {offer.host.name}
                  </span>
                  <span className='offer__user-status'>
                    {
                      offer.host.isPro && ('Pro')
                    }
                  </span>
                </div>
                <div className='offer__description'>
                  <p className='offer__text'>
                    {offer.description}
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
            city={offer.city}
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
