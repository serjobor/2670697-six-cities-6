import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import SortOffersByParam from './SortOffersByParam';
import { useAppSelector } from '../../hooks/redux';
import { getSortParam } from '../../store/selectors/offerSelectors';

vi.mock('../../hooks/redux', () => ({
  useAppDispatch: () => vi.fn(),
  useAppSelector: vi.fn(),
}));

vi.mock('../../store/selectors/offerSelectors', () => ({
  getSortParam: vi.fn(),
}));

vi.mock('../../store/reducers/offerSlice', () => ({
  offerSlice: {
    actions: {
      setSortParam: vi.fn(),
    },
  },
}));

describe('SortOffersByParam', () => {
  const mockUseAppSelector = vi.mocked(useAppSelector);
  const mockGetSortParam = vi.mocked(getSortParam);

  beforeEach(() => {
    vi.clearAllMocks();

    mockGetSortParam.mockReturnValue('Popular');
    mockUseAppSelector.mockImplementation((selector) => {
      if (selector === mockGetSortParam) {
        return 'Popular';
      }
      return null;
    });
  });

  const renderComponent = () => render(<SortOffersByParam />);

  it('renders form with correct CSS class', () => {
    const { container } = renderComponent();
    const form = container.querySelector('form');

    expect(form).toBeDefined();
    expect(form?.className).toBe('places__sorting');
  });

  it('renders "Sort by" caption', () => {
    renderComponent();
    expect(screen.getByText('Sort by')).toBeDefined();
  });
});
