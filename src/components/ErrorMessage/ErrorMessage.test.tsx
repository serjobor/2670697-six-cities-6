import { screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';
import { renderWithProviders } from '../../utils/test-utils';

describe('Component: ErrorMessage', () => {
  it('should render error text when error exists', () => {
    const errorText = 'Test error';

    renderWithProviders(<ErrorMessage />, {
      preloadedState: {
        app: {
          isLoading: false,
          error: errorText,
        },
      },
    });

    expect(screen.getByText(errorText)).toBeInTheDocument();
  });

  it('should not render anything when there is no error', () => {
    renderWithProviders(<ErrorMessage />, {
      preloadedState: {
        app: {
          isLoading: false,
          error: null,
        },
      },
    });

    const message = screen.queryByText(/./);
    expect(message).toBeNull();
  });
});


