import { AuthPayload } from '@models';
import { AuthService } from '@network';
import { tokenState } from '@state';
import { useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { Location } from 'history';
import { useRecoilState } from 'recoil';

export const useAuth = () => {
  const [token, setToken] = useRecoilState(tokenState);
  const history = useHistory<{ from?: Location } | undefined>();
  const { location } = history;
  const target = location.state?.from?.pathname ?? '/profile';

  const login = async (payload: AuthPayload) => {
    try {
      const { data } = await AuthService.loginUser(payload);
      if (data.ok) {
        setToken(data.data.token);
        toast.success('Sucess login!');
        setTimeout(history.push, 800, target);
      }
    } catch {}
  };

  const registerUser = async (payload: AuthPayload) => {
    try {
      const { data } = await AuthService.registerUser(payload);
      if (data.ok) {
        setToken(data.data.token);
        toast.success('Sucess register!');
        setTimeout(history.push, 800, target);
      }
    } catch {}
  };

  const logout = () => {
    setToken(null);
    setTimeout(history.push, 400, '/auth/login');
  };

  const isLoggedIn = useMemo(() => token === 'ey', [token]);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/profile');
    }
  }, [isLoggedIn, history]);

  const state = {
    isLoggedIn,
    token,
  };

  return { state, setToken, login, logout, registerUser };
};
