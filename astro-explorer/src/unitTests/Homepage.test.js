import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../components/Homepage';
import SplashScreen from '../components/SplashScreen';
import FeaturesSection from '../components/Features';
import IntroSection from '../components/IntroSection';
import Footer from '../components/Footer';

jest.mock('../components/SplashScreen', () => jest.fn());
jest.mock('../components/Features', () => jest.fn());
jest.mock('../components/IntroSection', () => jest.fn());
jest.mock('../components/Footer', () => jest.fn());

describe('HomePage Component', () => {
  beforeEach(() => {
    SplashScreen.mockClear();
    FeaturesSection.mockClear();
    IntroSection.mockClear();
    Footer.mockClear();
  });

  test('renders all sections correctly', () => {
    render(<HomePage />);
    expect(SplashScreen).toHaveBeenCalledTimes(1);
    expect(FeaturesSection).toHaveBeenCalledTimes(1);
    expect(IntroSection).toHaveBeenCalledTimes(1);
    expect(Footer).toHaveBeenCalledTimes(1);
  });
});
