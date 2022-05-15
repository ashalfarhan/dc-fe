import { useProfile } from '@hooks';
import { http, ProfileService } from '@network';
import { TOKEN_STORAGE_KEY } from '@state';
import { renderHook, act } from '@testing-library/react-hooks';
import { AppProvider } from 'Provider';

describe('useProfile', () => {
  let httpReqSpy: jest.SpyInstance;

  beforeEach(() => {
    httpReqSpy = jest.spyOn(http, 'request');
    sessionStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify('ey'));
  });

  afterEach(() => {
    httpReqSpy.mockReset();
    httpReqSpy.mockRestore();
    sessionStorage.removeItem(TOKEN_STORAGE_KEY);
  });

  it('should return initial', () => {
    const { result } = renderHook(useProfile, { wrapper: AppProvider });
    expect(result.current.state.profile).toBeNull();
  });

  it('"fetchProfile" should call the api', async () => {
    sessionStorage.setItem('tokenState', JSON.stringify('ey'));
    const { result } = renderHook(useProfile, { wrapper: AppProvider });
    await act(result.current.fetchProfile);

    expect(httpReqSpy).toHaveBeenCalledWith({
      method: 'GET',
      url: ProfileService.PREFIX,
    });

    expect(result.current.state.profile).not.toBeNull();
  });

  it('"submitUpdateProfile" shouldn\'t call the api (no user)', async () => {
    const { result } = renderHook(useProfile, { wrapper: AppProvider });
    await act(() => result.current.submitUpdateProfile({ bio: 'New bio' }));

    expect(httpReqSpy).not.toHaveBeenCalled();
  });

  it('"submitUpdateProfile" should call the api', async () => {
    const { result } = renderHook(useProfile, { wrapper: AppProvider });
    await act(result.current.fetchProfile);

    const payload = {
      ...result.current.state.profile,
      bio: 'New bio',
    };
    await act(() => result.current.submitUpdateProfile(payload));

    expect(httpReqSpy).toHaveBeenCalledWith({
      method: 'PUT',
      url: `${ProfileService.PREFIX}/${payload.id}`,
      data: payload,
    });
  });
});
