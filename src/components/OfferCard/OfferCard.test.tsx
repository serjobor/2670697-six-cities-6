import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import OfferCard from './OfferCard';
import { IBaseOffer, IDisplayOption } from '../../types/offers';
import { getAuthorizationStatus } from '../../store/selectors/userSelectors';
import { AuthorizationStatus } from '../../constants';

vi.mock('react-router-dom', () => ({
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
  useNavigate: vi.fn(),
}));

vi.mock('../../hooks/redux', () => ({
  useAppDispatch: () => vi.fn(),
  useAppSelector: vi.fn(),
}));

vi.mock('../../store/selectors/userSelectors', () => ({
  getAuthorizationStatus: vi.fn(),
}));

vi.mock('../../store/api-actions', () => ({
  changeFavoriteStatusOffer: vi.fn(),
  fetchFavoriteOffers: vi.fn(),
}));

vi.mock('../../services/process-error-handle', () => ({
  processErrorHandle: vi.fn(),
}));

describe('OfferCard', () => {
  const mockNavigate = vi.fn();
  const mockOnItemHover = vi.fn();

  const mockOffer: IBaseOffer = {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Test Offer Title',
    type: 'apartment',
    price: 100,
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
    rating: 4.2,
    isFavorite: false,
    isPremium: true,
    previewImage: 'test-image.jpg',
  };

  const mockVariant: IDisplayOption = {
    widthForImg: '260',
    heightForImg: '200',
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (useNavigate as Mock).mockReturnValue(mockNavigate);
    (getAuthorizationStatus as Mock).mockReturnValue(AuthorizationStatus.Auth);
  });

  const renderComponent = (
    offer = mockOffer,
    cardDisplayStyle = 'cities',
    variant = mockVariant
  ) => render(
    <OfferCard
      offer={offer}
      cardDisplayStyle={cardDisplayStyle}
      variant={variant}
      onItemHover={mockOnItemHover}
    />
  );

  it('renders offer title correctly', () => {
    renderComponent();
    expect(screen.getByText('Test Offer Title')).toBeDefined();
  });

  it('renders offer price with euro symbol', () => {
    renderComponent();
    expect(screen.getByText(/€100/)).toBeDefined();
  });

  it('renders premium badge when offer is premium', () => {
    renderComponent();
    expect(screen.getByText('Premium')).toBeDefined();
  });

  it('does not render premium badge when offer is not premium', () => {
    const nonPremiumOffer = { ...mockOffer, isPremium: false };
    renderComponent(nonPremiumOffer);
    expect(screen.queryByText('Premium')).toBeNull();
  });

  it('renders offer type', () => {
    renderComponent();
    expect(screen.getByText('apartment')).toBeDefined();
  });

  it('renders image with correct attributes', () => {
    renderComponent();
    const image = screen.getByAltText('Place image');
    expect(image.getAttribute('src')).toBe('test-image.jpg');
    expect(image.getAttribute('width')).toBe('260');
    expect(image.getAttribute('height')).toBe('200');
  });
});
