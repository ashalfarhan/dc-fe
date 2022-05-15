import { tokenState, TOKEN_STORAGE_KEY } from '@state';
import { fireEvent, render, screen } from '@testing-library/react';
import { AppProvider } from 'Provider';
import { RecoilObserver } from 'test-utils';
import Header from '../Header';

describe('Header', () => {
  beforeEach(() => {
    sessionStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify('ey'));
  });

  afterEach(() => {
    sessionStorage.removeItem(TOKEN_STORAGE_KEY);
  });

  it('should toggle navigation', () => {
    render(<Header />, { wrapper: AppProvider });
    const nav = screen.getByRole('navigation');

    expect(nav.className).toContain('invisible');
    fireEvent.click(screen.getByTestId('dropdownToggle'));
    expect(nav.className).toContain('visible');
  });

  it('should clear the token', () => {
    const onChange = jest.fn();
    render(
      <RecoilObserver onChange={onChange} atom={tokenState}>
        <Header />
      </RecoilObserver>,
      { wrapper: AppProvider }
    );

    expect(sessionStorage.getItem(TOKEN_STORAGE_KEY)).toMatch(/ey/);
    fireEvent.click(screen.getByText(/logout/i));

    expect(onChange).toHaveBeenCalledWith(null);
    expect(sessionStorage.getItem(TOKEN_STORAGE_KEY)).toMatch(/null/);
  });
});
