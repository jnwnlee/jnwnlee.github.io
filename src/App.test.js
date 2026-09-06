import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the full publications page without the profile card', () => {
  window.history.pushState({}, '', '/publications');

  render(<App />);

  expect(screen.getByRole('heading', { name: 'Publications' })).toBeInTheDocument();
  expect(screen.getByText(/selected publications can be found on the home page/i)).toBeInTheDocument();
  expect(screen.getByText(/CONMOD: Controllable Neural Frame-based Modulation Effects/i)).toBeInTheDocument();
  expect(screen.queryByText(/i am a ph\.d\. student/i)).not.toBeInTheDocument();
});
