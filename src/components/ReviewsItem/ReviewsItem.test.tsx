import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ReviewsItem from './ReviewsItem';
import { IReview } from '../../types/reviews';

describe('ReviewsItem', () => {
  const mockComment: IReview = {
    id: 'review-1',
    date: '2024-03-15T10:30:00.000Z',
    comment: 'This is a great place! I really enjoyed my stay.',
    rating: 4.5,
    user: {
      name: 'John Doe',
      avatarUrl: 'https://example.com/avatar.jpg',
      isPro: true,
    },
  };

  const renderComponent = (comment = mockComment) => render(<ReviewsItem comment={comment} />);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders user name correctly', () => {
    renderComponent();
    expect(screen.getByText('John Doe')).toBeDefined();
  });

  it('renders comment text correctly', () => {
    renderComponent();
    expect(screen.getByText('This is a great place! I really enjoyed my stay.')).toBeDefined();
  });
});
