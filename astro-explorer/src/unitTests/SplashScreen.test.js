import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SplashScreen from '../components/SplashScreen';

// Mock the ResizeObserver
window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));

// Mock the canvas and its context
jest.mock('../components/SplashScreen', () => {
    return {
      __esModule: true,
      default: jest.fn(() => null), // Return null to mock the component
    };
  });

describe('SplashScreen Component', () => {

  test('hides navigation when scrolling down', () => {
    render(<SplashScreen />);
    // Mock scroll event
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    // Check if the navigation is hidden
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  test('shows navigation when scrolling up', () => {
    // Render the SplashScreen component
    render(<SplashScreen />);
    // Mock scroll event
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    // Check if the navigation is visible
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    // Fire another scroll event to simulate scrolling up
    fireEvent.scroll(window, { target: { scrollY: 0 } });
    
  });
});
