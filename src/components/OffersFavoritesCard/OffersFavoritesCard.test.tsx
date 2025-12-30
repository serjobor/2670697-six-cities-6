import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import OffersFavoritesCard from './OffersFavoritesCard';
import { IBaseOffer } from '../../types/offers';

vi.mock('../OfferCard', () => ({
  default: ({ offer }: { offer: IBaseOffer }) => (
    <div data-testid="offer-card">{offer.title}</div>
  )
}));

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
      <a href={to}>{children}</a>
    ),
  };
});

describe('OffersFavoritesCard', () => {
  const mockOffers: IBaseOffer[] = [
    {
      id: '1',
      title: 'Offer 1',
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
      title: 'Offer 2',
      type: 'room',
      price: 50,
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
      rating: 4.0,
      isFavorite: true,
      isPremium: true,
      previewImage: 'img2.jpg',
    },
  ];

  const renderComponent = (
    cityName = 'Paris',
    sortOffersByCityName = mockOffers
  ) => render(
    <MemoryRouter>
      <OffersFavoritesCard
        cityName={cityName}
        sortOffersByCityName={sortOffersByCityName}
      />
    </MemoryRouter>
  );

  it('renders city name correctly', () => {
    renderComponent('Paris');
    expect(screen.getByText('Paris')).toBeDefined();
  });

  it('renders link to main page', () => {
    renderComponent();
    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/');
  });

  it('renders favorite offers only', () => {
    const mixedOffers = [
      ...mockOffers,
      {
        id: '3',
        title: 'Not Favorite',
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

    renderComponent('Paris', mixedOffers);

    const offerCards = screen.getAllByTestId('offer-card');
    expect(offerCards).toHaveLength(2);
    expect(screen.getByText('Offer 1')).toBeDefined();
    expect(screen.getByText('Offer 2')).toBeDefined();
    expect(screen.queryByText('Not Favorite')).toBeNull();
  });

  it('returns null when no favorite offers', () => {
    const nonFavoriteOffers = [
      {
        id: '1',
        title: 'Not Favorite',
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
        isFavorite: false,
        isPremium: false,
        previewImage: 'img1.jpg',
      },
    ];

    const { container } = renderComponent('Paris', nonFavoriteOffers);
    expect(container.firstChild).toBeNull();
  });
});
