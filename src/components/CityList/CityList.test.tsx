import { screen } from '@testing-library/react';
import CityList from './CityList';
import { renderWithProviders } from '../../utils/test-utils';
import { CITY_LIST_OPTIONS, OfferSortType } from '../../constants/offers';

describe('Component: CityList', () => {

  it('should render all cities from CITY_LIST_OPTIONS', () => {
    renderWithProviders(<CityList />);

    CITY_LIST_OPTIONS.forEach((city) => {
      expect(screen.getByText(city)).toBeInTheDocument();
    });
  });

  it('should highlight active city with correct CSS class', () => {
    const activeCity = CITY_LIST_OPTIONS[0];

    renderWithProviders(<CityList />, {
      preloadedState: {
        offer: {
          city: activeCity,
          offers: [],
          sortParam: OfferSortType.Popular,
          fullOffer: null,
          nearbyOffers: [],
          favoriteOffers: [],
          isFavoriteOffersLoad: false,
          review: null,
          isReviewSending: false,
          comments: [],
        },
      },
    });

    const activeElement = screen.getByText(activeCity).closest('a');
    expect(activeElement).toHaveClass('tabs__item--active');

    CITY_LIST_OPTIONS.slice(1).forEach((city) => {
      const element = screen.getByText(city).closest('a');
      expect(element).not.toHaveClass('tabs__item--active');
    });
  });

  it('should not have active city class when no city is selected', () => {
    renderWithProviders(<CityList />, {
      preloadedState: {
        offer: {
          city: '',
          offers: [],
          sortParam: OfferSortType.Popular,
          fullOffer: null,
          nearbyOffers: [],
          favoriteOffers: [],
          isFavoriteOffersLoad: false,
          review: null,
          isReviewSending: false,
          comments: [],
        },
      },
    });

    CITY_LIST_OPTIONS.forEach((city) => {
      const element = screen.getByText(city).closest('a');
      expect(element).not.toHaveClass('tabs__item--active');
    });
  });

  it('should have correct semantic structure', () => {
    renderWithProviders(<CityList />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(CITY_LIST_OPTIONS.length);

    listItems.forEach((item, index) => {
      expect(item).toHaveClass('locations__item');
      const link = item.querySelector('a');
      expect(link).toHaveClass('locations__item-link', 'tabs__item');
      expect(link).toHaveTextContent(CITY_LIST_OPTIONS[index]);
    });
  });
});
