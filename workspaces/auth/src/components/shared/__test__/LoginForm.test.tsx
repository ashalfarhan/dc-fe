import { render, screen } from '@testing-library/react';
import { LoginForm } from '../LoginForm';
import { AppProvider } from 'Provider';
import userEvent from '@testing-library/user-event';

describe('LoginForm with `userEvent`', () => {
  let onSubmit: jest.Mock;

  beforeAll(() => {
    onSubmit = jest.fn();
  });

  afterEach(() => {
    onSubmit.mockClear();
  });

  const setup = () => {
    return render(<LoginForm onSubmit={onSubmit} />, {
      wrapper: AppProvider,
    });
  };

  it('should render no error, and button disabled initially', () => {
    setup();

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should render error because input email not valid', async () => {
    setup();

    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByText(/submit/i);

    await userEvent.type(emailInput, 'asda');
    await userEvent.type(passwordInput, 'password');
    await userEvent.click(submitButton);
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveTextContent(/invalid email/i);

    expect(submitButton).not.toBeDisabled();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('should render error because password too short', async () => {
    setup();

    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByText(/submit/i);

    await userEvent.type(emailInput, 'tes1@mail.com');
    await userEvent.type(passwordInput, 'pass');
    await userEvent.click(submitButton);
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveTextContent(/8 characters/i);

    expect(submitButton).not.toBeDisabled();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('should call onSubmit if validation passes', async () => {
    setup();

    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByText(/submit/i);
    await userEvent.type(emailInput, 'tes1@mail.com');
    await userEvent.type(passwordInput, 'password');
    await userEvent.click(submitButton);

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(onSubmit).toHaveBeenCalled();
  });
});
