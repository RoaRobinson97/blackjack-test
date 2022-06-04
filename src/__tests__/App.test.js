import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Renders table', () => {
  render(<App />);
  const linkElement = screen.getByText(/21 Blackjack/i);
  expect(linkElement).toBeInTheDocument();
});
