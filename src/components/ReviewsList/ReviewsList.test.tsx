import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ReviewsList from './ReviewsList';
import { IReview } from '../../types/reviews';

vi.mock('../ReviewsItem', () => ({
  default: ({ comment }: { comment: IReview }) => (
    <li data-testid="review-item" data-comment-id={comment.id}>
      {comment.comment}
    </li>
  )
}));

describe('ReviewsList', () => {
  const mockComments: IReview[] = [
    {
      id: 'review-1',
      date: '2024-03-15T10:30:00.000Z',
      comment: 'Great place to stay!',
      rating: 4.5,
      user: {
        name: 'John Doe',
        avatarUrl: 'https://example.com/avatar1.jpg',
        isPro: true,
      },
    },
    {
      id: 'review-2',
      date: '2024-03-10T14:20:00.000Z',
      comment: 'Nice apartment with good view',
      rating: 4.0,
      user: {
        name: 'Jane Smith',
        avatarUrl: 'https://example.com/avatar2.jpg',
        isPro: false,
      },
    },
    {
      id: 'review-3',
      date: '2024-03-05T09:15:00.000Z',
      comment: 'Could be better',
      rating: 3.0,
      user: {
        name: 'Bob Johnson',
        avatarUrl: 'https://example.com/avatar3.jpg',
        isPro: true,
      },
    },
  ];

  const renderComponent = (comments = mockComments) => render(<ReviewsList comments={comments} />);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders list with correct CSS class', () => {
    const { container } = renderComponent();
    const list = container.querySelector('ul');

    expect(list).toBeDefined();
    expect(list?.className).toBe('reviews__list');
  });

  it('renders correct number of ReviewsItem components', () => {
    renderComponent();

    const reviewItems = screen.getAllByTestId('review-item');
    expect(reviewItems).toHaveLength(3);
  });

  it('passes correct comments to each ReviewsItem', () => {
    renderComponent();

    const reviewItems = screen.getAllByTestId('review-item');

    reviewItems.forEach((item, index) => {
      const comment = mockComments[index];
      expect(item.getAttribute('data-comment-id')).toBe(comment.id);
      expect(item.textContent).toBe(comment.comment);
    });
  });

  it('renders empty list when comments array is empty', () => {
    const { container } = renderComponent([]);

    const list = container.querySelector('ul');
    expect(list).toBeDefined();
    expect(list?.children).toHaveLength(0);
  });

  it('renders single review when array has only one comment', () => {
    const singleComment = [mockComments[0]];
    renderComponent(singleComment);

    const reviewItems = screen.getAllByTestId('review-item');
    expect(reviewItems).toHaveLength(1);
    expect(reviewItems[0].textContent).toBe('Great place to stay!');
  });

  it('orders reviews correctly (keeps original order)', () => {
    renderComponent();

    const reviewItems = screen.getAllByTestId('review-item');

    expect(reviewItems[0].getAttribute('data-comment-id')).toBe('review-1');
    expect(reviewItems[1].getAttribute('data-comment-id')).toBe('review-2');
    expect(reviewItems[2].getAttribute('data-comment-id')).toBe('review-3');

    expect(reviewItems[0].textContent).toBe('Great place to stay!');
    expect(reviewItems[1].textContent).toBe('Nice apartment with good view');
    expect(reviewItems[2].textContent).toBe('Could be better');
  });

  it('uses comment.id as key for each ReviewsItem', () => {
    renderComponent();

    const reviewItems = screen.getAllByTestId('review-item');

    const ids = reviewItems.map((item) => item.getAttribute('data-comment-id'));
    expect(ids).toEqual(['review-1', 'review-2', 'review-3']);

    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(3);
  });
});
