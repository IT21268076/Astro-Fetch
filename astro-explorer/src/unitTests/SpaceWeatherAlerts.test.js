import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import SpaceWeatherAlerts from '../components/SpaceWeatherAlerts'

// Mock axios
jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('SpaceWeatherAlerts Component', () => {
  test('renders Space Weather Alerts title', async () => {
    // Mock the API response
    axios.get.mockResolvedValue({
      data: [
        {
          messageType: 'Alert',
          messageBody: '## Summary: This is a test alert\n## Notes: More information here',
          messageIssueTime: '2023-04-01T00:00:00Z',
          messageURL: 'https://example.com/alert',
        },
      ],
    });
  
    render(<SpaceWeatherAlerts />);
  
    // Wait for the component to update with the fetched data
    await waitFor(() => screen.getByText(/Space Weather Alerts/i));
  
    // Check if the title is rendered
    expect(screen.getByText(/Space Weather Alerts/i)).toBeInTheDocument();
  
    // Check if the paragraph message is rendered
    expect(screen.getByText(/All the alerts and messages about space weather are here. Keep updating. Click link for more information!/i)).toBeInTheDocument();
  });
  

  // Add more tests as needed, for example, to test the parsing of message bodies
});
