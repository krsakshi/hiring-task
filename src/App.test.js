import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App'; // Updated import path

describe('App Component', () => {
  it('renders the app header', () => {
    render(<App />);
    const headerElement = screen.getByText(/Welcome to the App/i); // Updated text match
    expect(headerElement).toBeInTheDocument();
  });

  // Add more tests as needed
});
