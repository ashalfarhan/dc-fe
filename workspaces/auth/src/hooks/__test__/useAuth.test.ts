import { useAuth } from '@hooks';
import { AuthPayload } from '@models';
import { AuthService, http } from '@network';
import { renderHook, act } from '@testing-library/react-hooks';
import { AppProvider } from 'Provider';

describe('useAuth', () => {
  let httpReqSpy: jest.SpyInstance;
  let payload: AuthPayload;

  beforeEach(() => {
    httpReqSpy = jest.spyOn(http, 'request');
  });

  afterEach(() => {
    httpReqSpy.mockReset();
    httpReqSpy.mockRestore();
  });

  it('"isLoggedIn" should return false initially', () => {
    const { result } = renderHook(useAuth, { wrapper: AppProvider });
    expect(result.current.state.isLoggedIn).toBeFalsy();
  });

  it('"login" should call the api', async () => {
    const { result } = renderHook(useAuth, { wrapper: AppProvider });
    payload = {
      email: 'test1@mail.com',
      password: 'password',
    };

    await act(() => result.current.login(payload));

    expect(httpReqSpy).toHaveBeenCalledWith({
      method: 'POST',
      url: `${AuthService.PREFIX}/login`,
      data: payload,
    });
    expect(result.current.state.isLoggedIn).toBeTruthy();

    act(result.current.logout); // cleanup
  });

  it('"register" should call the api', async () => {
    const { result } = renderHook(useAuth, { wrapper: AppProvider });
    payload = {
      email: 'test2@mail.com',
      password: 'password',
    };

    await act(() => result.current.registerUser(payload));

    expect(httpReqSpy).toHaveBeenCalledWith({
      method: 'POST',
      url: `${AuthService.PREFIX}/register`,
      data: payload,
    });

    expect(result.current.state.isLoggedIn).toBeTruthy();

    act(result.current.logout); // cleanup
  });

  it('"logout" should make "isLoggedIn" to be false', async () => {
    const { result } = renderHook(useAuth, {
      wrapper: AppProvider,
    });

    await act(() =>
      result.current.login({
        email: 'test1@mail.com',
        password: 'password',
      })
    );

    act(result.current.logout);

    expect(result.current.state.isLoggedIn).toBeFalsy();
  });
});
