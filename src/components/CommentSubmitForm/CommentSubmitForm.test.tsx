import { screen } from '@testing-library/react';
import CommentSubmitForm from './CommentSubmitForm';
import { renderWithProviders } from '../../utils/test-utils';

const mockOfferId = 'test-offer-id';

describe('Component: CommentSubmitForm', () => {
  it('should have disabled submit button when form is invalid', () => {
    renderWithProviders(<CommentSubmitForm offerId={mockOfferId} />);

    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeDisabled();
  });
});
