import React from 'react';
import { render, screen } from '@testing-library/react';
import IntroSection from '../components/IntroSection';
import { MemoryRouter } from 'react-router-dom';

describe('IntroSection Component', () => {
  test('renders section title and content correctly', () => {
    render(
      <MemoryRouter>
        <IntroSection />
      </MemoryRouter>
    );

    expect(screen.getByText('Just Explore')).toBeInTheDocument();
    
    expect(screen.getByText('Read the Articles')).toBeInTheDocument();
    expect(screen.getByText('Try it out')).toBeInTheDocument();
  });

  test('renders correct link destinations', () => {
    render(
      <MemoryRouter>
        <IntroSection />
      </MemoryRouter>
    );

    const articlesLink = screen.getByText('Read the Articles');
    const tryItOutLink = screen.getByText('Try it out');

    expect(articlesLink.closest('a')).toHaveAttribute('href', 'https://www.nasa.gov/setmo/articles/');
    expect(tryItOutLink.closest('a')).toHaveAttribute('href', '/features');
  });
});
