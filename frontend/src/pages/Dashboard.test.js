import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard'; // Updated import path

describe('Dashboard Component', () => {
  it('renders the dashboard', () => {
    render(<Dashboard />);
    const headingElement = screen.getByText(/Dashboard/i); // Updated text match
    expect(headingElement).toBeInTheDocument();
  });

  // Add more tests as needed
});
