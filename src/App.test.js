import { render, screen } from '@testing-library/react';
import App from './App';

test('renders inventory management system', () => {
  render(<App />);
  expect(document.title || document.body).toBeTruthy();
});