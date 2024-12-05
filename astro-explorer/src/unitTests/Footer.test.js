import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  test('renders footer elements correctly', () => {
    render(<Footer />);

    // Ensure that the logo is rendered
    expect(screen.getByAltText('Your Logo')).toBeInTheDocument();

    // Ensure that social media icons are rendered with correct alt texts
    expect(screen.getByAltText('Facebook')).toBeInTheDocument();
    expect(screen.getByAltText('Instagram')).toBeInTheDocument();
    expect(screen.getByAltText('Twitter')).toBeInTheDocument();
    expect(screen.getByAltText('LinkedIn')).toBeInTheDocument();

    // Ensure that NASA logo is rendered
    expect(screen.getByAltText('NASA Logo')).toBeInTheDocument();
  });

  test('links have correct href attributes', () => {
    render(<Footer />);

    // Ensure that social media icons have correct href attributes
    const facebookLink = screen.getByAltText('Facebook').closest('a');
    const instagramLink = screen.getByAltText('Instagram').closest('a');
    const twitterLink = screen.getByAltText('Twitter').closest('a');
    const linkedInLink = screen.getByAltText('LinkedIn').closest('a');

    expect(facebookLink).toHaveAttribute('href', 'https://www.flaticon.com/free-icons/facebook');
    expect(instagramLink).toHaveAttribute('href', '#');
    expect(twitterLink).toHaveAttribute('href', '#');
    expect(linkedInLink).toHaveAttribute('href', '#');
  });
});
