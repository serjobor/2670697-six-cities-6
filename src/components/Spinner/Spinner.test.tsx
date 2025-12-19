import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

describe('Component: Spinner', () => {
  it('should render correctly', () => {
    render(<Spinner />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});


