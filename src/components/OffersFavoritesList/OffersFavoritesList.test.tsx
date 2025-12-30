import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import OffersFavoritesList from './OffersFavoritesList';
import { CITY_LIST_OPTIONS } from '../../constants/offers';
import { useAppSelector } from '../../hooks/redux';
import { getOffers } from '../../store/selectors/offerSelectors';

vi.mock('../OffersFavoritesCard', () => ({
  default: ({ cityName }: { cityName: string }) => (
    <div data-testid="favorites-card">{cityName}</div>
  )
}));

vi.mock('../../hooks/redux', () => ({
  useAppSelector: vi.fn(),
}));

vi.mock('../../store/selectors/offerSelectors', () => ({
  getOffers: vi.fn(),
}));

describe('OffersFavoritesList', () => {
  const mockUseAppSelector = vi.mocked(useAppSelector);
  const mockGetOffers = vi.mocked(getOffers);

  const mockOffers = [
    {
      id: '1',
      title: 'Paris Offer 1',
      type: 'apartment',
      price: 100,
      city: {
        name: 'Paris',
        location: {
          latitude: 48.856613,
          longitude: 2.352222,
          zoom: 10,
        }
      },
      location: {
        latitude: 48.856613,
        longitude: 2.352222,
        zoom: 10,
      },
      rating: 4.5,
      isFavorite: true,
      isPremium: false,
      previewImage: 'img1.jpg',
    },
    {
      id: '2',
      title: 'Cologne Offer',
      type: 'room',
      price: 50,
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.937531,
          longitude: 6.960279,
          zoom: 10,
        }
      },
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 10,
      },
      rating: 4.0,
      isFavorite: true,
      isPremium: true,
      previewImage: 'img2.jpg',
    },
    {
      id: '3',
      title: 'Paris Offer 2',
      type: 'house',
      price: 200,
      city: {
        name: 'Paris',
        location: {
          latitude: 48.856613,
          longitude: 2.352222,
          zoom: 10,
        }
      },
      location: {
        latitude: 48.856613,
        longitude: 2.352222,
        zoom: 10,
      },
      rating: 3.5,
      isFavorite: false,
      isPremium: false,
      previewImage: 'img3.jpg',
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    mockGetOffers.mockReturnValue(mockOffers);
  });

  const renderComponent = () => render(<OffersFavoritesList />);

  it('filters offers by city name when passing to OffersFavoritesCard', () => {
    mockUseAppSelector.mockImplementation((selector) => {
      if (selector === mockGetOffers) {
        return mockOffers;
      }
      return [];
    });

    renderComponent();

    const favoritesCards = screen.getAllByTestId('favorites-card');
    expect(favoritesCards).toHaveLength(CITY_LIST_OPTIONS.length);
  });
});
