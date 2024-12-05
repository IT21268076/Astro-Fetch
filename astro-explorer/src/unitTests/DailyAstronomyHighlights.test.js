import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DailyAstronomyHighlights from '../components/DailyAstronomyHighlights';
import { fetchAstronomyPictureOfTheDay } from '../api';
import { addToFavorites } from '../utils/favoritesManager';

// Mocking fetchAstronomyPictureOfTheDay and addToFavorites functions
jest.mock('../api', () => ({
  fetchAstronomyPictureOfTheDay: jest.fn(),
}));

jest.mock('../utils/favoritesManager', () => ({
  addToFavorites: jest.fn(),
}));

describe('DailyAstronomyHighlights Component', () => {
  beforeEach(() => {
    fetchAstronomyPictureOfTheDay.mockClear();
    addToFavorites.mockClear();
  });

  test('renders astronomy picture correctly', async () => {
    const pictureData = {
      url: 'https://example.com/image.jpg',
      title: 'Astronomy Picture',
      explanation: 'This is an astronomy picture.',
    };
    fetchAstronomyPictureOfTheDay.mockResolvedValueOnce(pictureData);

    render(<DailyAstronomyHighlights />);
    
    expect(screen.getByText('Daily Astronomy Highlights')).toBeInTheDocument();
    expect(screen.queryByText('Astronomy Picture of the Day')).not.toBeInTheDocument();

    // Wait for image to load
    expect(await screen.findByAltText('Astronomy Picture')).toBeInTheDocument();
    expect(screen.getByText('This is an astronomy picture.')).toBeInTheDocument();
  });

  test('adds astronomy picture to favorites correctly', async () => {
    const pictureData = {
      url: 'https://example.com/image.jpg',
      title: 'Astronomy Picture',
      explanation: 'This is an astronomy picture.',
    };
    fetchAstronomyPictureOfTheDay.mockResolvedValueOnce(pictureData);

    render(<DailyAstronomyHighlights />);
    
    // Wait for image to load
    await screen.findByAltText('Astronomy Picture');

    const addToFavoritesButton = screen.getByText('Add to Favorites');
    fireEvent.click(addToFavoritesButton);

    expect(addToFavorites).toHaveBeenCalledWith(pictureData);
  });
});
