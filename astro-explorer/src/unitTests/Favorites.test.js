import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Favorites from '../components/Favorites';
import { getSessionData } from '../utils/sessionManager';
import { removeFromFavorites } from '../utils/favoritesManager';

// Mocking getSessionData and removeFromFavorites functions
jest.mock('../utils/sessionManager', () => ({
  getSessionData: jest.fn(),
}));

jest.mock('../utils/favoritesManager', () => ({
  removeFromFavorites: jest.fn(),
}));

describe('Favorites Component', () => {
  beforeEach(() => {
    getSessionData.mockClear();
    removeFromFavorites.mockClear();
  });

  test('renders no favorites message when there are no favorites', () => {
    getSessionData.mockReturnValueOnce(null);
    render(<Favorites />);
    expect(screen.getByText('No favorites found.')).toBeInTheDocument();
  });

  test('renders favorite items correctly', () => {
    const favorites = [
      {
        id: 1,
        title: 'Favorite 1',
        url: 'https://example.com/favorite1.jpg',
      },
      {
        id: 2,
        title: 'Favorite 2',
        explanation: 'This is favorite 2.',
        date: '2024-05-01',
      },
    ];
    getSessionData.mockReturnValueOnce(favorites);
    render(<Favorites />);
    expect(screen.getByText('My Favorites')).toBeInTheDocument();
    expect(screen.getAllByAltText(/Favorite/i)).toHaveLength(2);
    expect(screen.getByText('Favorite 1')).toBeInTheDocument();
    expect(screen.getByText('Favorite 2')).toBeInTheDocument();
    expect(screen.getByText('This is favorite 2.')).toBeInTheDocument();
  });

  test('removes favorite item correctly', () => {
    const favorites = [
      {
        id: 1,
        title: 'Favorite 1',
        url: 'https://example.com/favorite1.jpg',
      },
      {
        id: 2,
        title: 'Favorite 2',
        explanation: 'This is favorite 2.',
        date: '2024-05-01',
      },
    ];
    getSessionData.mockReturnValueOnce(favorites);
    render(<Favorites />);
    
    const removeButtons = screen.getAllByText('Remove Favorite');
    fireEvent.click(removeButtons[0]); // Remove the first favorite

    expect(removeFromFavorites).toHaveBeenCalledWith(1);
    expect(screen.queryByText('Favorite 1')).not.toBeInTheDocument();
    expect(screen.queryAllByAltText(/Favorite/i)).toHaveLength(1);
  });
});
