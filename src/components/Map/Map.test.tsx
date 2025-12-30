import { renderWithProviders } from '../../utils/test-utils';
import Map from './Map';
import { IBaseOffer, ICity } from '../../types/offers';

const mockCity: ICity = {
  name: 'Amsterdam',
  location: {
    latitude: 52.37403,
    longitude: 4.88969,
    zoom: 12,
  },
};

const mockPoints: IBaseOffer[] = [
  {
    id: '1',
    title: 'Test 1',
    type: 'hotel',
    price: 471,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2
  },
  {
    id: '2',
    title: 'Test 2',
    type: 'hotel',
    price: 471,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2
  },
];

describe('Component: Map', () => {
  it('should render map container with correct className for OfferPage', () => {
    const { container } = renderWithProviders(
      <Map
        city={mockCity}
        points={mockPoints}
        selectedPoint={null}
        namePage="OfferPage"
      />
    );

    const mapContainer = container.querySelector('.offer__map.map');
    expect(mapContainer).toBeInTheDocument();
  });
});
