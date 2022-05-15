import { render, screen } from '@testing-library/react';
import { AppProvider } from 'Provider';
import LoginPage from '../LoginPage';

it('should render described in UI', () => {
  render(<LoginPage />, { wrapper: AppProvider });

  expect(
    screen.getByText(/login/i, {
      selector: 'div',
    })
  ).toBeInTheDocument();
});
