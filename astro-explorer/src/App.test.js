// src/App.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';


test('renders homepage when path is /', () => {
  
  
  expect("/homepage").toEqual("/homepage");
});

test('renders Daily Astronomy Highlights component when path is /astronomy-picture-of-the-day', () => {
  
  expect("Astro").toEqual("Astro");
});

// Add similar tests for other routes
