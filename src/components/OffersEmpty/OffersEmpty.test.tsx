import { render, screen } from '@testing-library/react';
import OffersEmpty from './OffersEmpty';

describe('Component: OffersEmpty', () => {
  it('should render correct text with city name', () => {
    const city = 'Paris';

    render(<OffersEmpty city={city} />);

    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
    expect(
      screen.getByText(`We could not find any property available at the moment in ${city}`)
    ).toBeInTheDocument();
  });
});


