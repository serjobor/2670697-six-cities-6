import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import OffersList from './OffersList';
import { IBaseOffer } from '../../types/offers';

vi.mock('../OfferCard', () => ({
  default: ({
    offer,
    cardDisplayStyle,
    onItemHover
  }: {
    offer: IBaseOffer;
    cardDisplayStyle: string;
    onItemHover?: (itemName: string) => void;
  }) => (
    <div
      data-testid="offer-card"
      data-offer-id={offer.id}
      data-style={cardDisplayStyle}
      onClick={() => onItemHover?.(offer.id)}
    >
      {offer.title}
    </div>
  )
}));

describe('OffersList', () => {
  const mockOffers: IBaseOffer[] = [
    {
      id: '1',
      title: 'Beautiful & luxurious apartment at great location',
      type: 'apartment',
      price: 120,
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.35514938496378,
          longitude: 4.673877537499948,
          zoom: 8,
        }
      },
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
      rating: 4.5,
      isFavorite: false,
      isPremium: true,
      previewImage: 'img1.jpg',
    },
    {
      id: '2',
      title: 'Wood and stone place',
      type: 'room',
      price: 80,
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.35514938496378,
          longitude: 4.673877537499948,
          zoom: 8,
        }
      },
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
      rating: 4.0,
      isFavorite: true,
      isPremium: false,
      previewImage: 'img2.jpg',
    },
  ];

  const mockOnItemHover = vi.fn();

  const renderComponent = (
    offers = mockOffers,
    cardDisplayStyle = 'cities',
    onItemHover = mockOnItemHover
  ) => render(
    <OffersList
      offers={offers}
      cardDisplayStyle={cardDisplayStyle}
      onItemHover={onItemHover}
    />
  );

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correct number of OfferCard components', () => {
    renderComponent();

    const offerCards = screen.getAllByTestId('offer-card');
    expect(offerCards).toHaveLength(2);
  });

  it('passes correct props to each OfferCard', () => {
    renderComponent();

    const offerCards = screen.getAllByTestId('offer-card');

    offerCards.forEach((card, index) => {
      const offer = mockOffers[index];
      expect(card.getAttribute('data-offer-id')).toBe(offer.id);
      expect(card.getAttribute('data-style')).toBe('cities');
      expect(card.textContent).toBe(offer.title);
    });
  });

  it('passes correct cardDisplayStyle to OfferCard', () => {
    renderComponent(mockOffers, 'favorites');

    const offerCards = screen.getAllByTestId('offer-card');

    offerCards.forEach((card) => {
      expect(card.getAttribute('data-style')).toBe('favorites');
    });
  });

  it('calls onItemHover with correct offer id when triggered', () => {
    renderComponent();

    const offerCards = screen.getAllByTestId('offer-card');

    offerCards[0].click();
    expect(mockOnItemHover).toHaveBeenCalledWith('1');

    offerCards[1].click();
    expect(mockOnItemHover).toHaveBeenCalledWith('2');
  });

  it('does not throw error when onItemHover is not provided', () => {
    renderComponent(mockOffers, 'cities', undefined);

    const offerCards = screen.getAllByTestId('offer-card');

    expect(() => offerCards[0].click()).not.toThrow();
  });

  it('renders nothing when offers array is empty', () => {
    const { container } = renderComponent([]);

    expect(container.firstChild).toBeNull();
  });

  it('passes different cardDisplayStyle to OfferCard', () => {
    renderComponent(mockOffers, 'near-places');

    const offerCards = screen.getAllByTestId('offer-card');

    offerCards.forEach((card) => {
      expect(card.getAttribute('data-style')).toBe('near-places');
    });
  });
});
