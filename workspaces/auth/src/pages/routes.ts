import CallbackPage from './Auth/Callback';
import LoginPage from './Auth/LoginPage';
import RegisterPage from './Auth/RegisterPage';
import EditProfilePage from './Profile/EditProfilePage';
import ProfilePage from './Profile/ProfilePage';

export const routes = [
  {
    exact: true,
    path: '/profile',
    isProtected: true,
    component: ProfilePage,
  },
  {
    exact: true,
    path: '/profile/edit',
    isProtected: true,
    component: EditProfilePage,
  },
  {
    path: '/auth/register',
    exact: true,
    component: RegisterPage,
  },
  {
    path: '/auth/login',
    exact: true,
    component: LoginPage,
  },
  {
    path: '/auth/callback',
    exact: true,
    component: CallbackPage,
  },
];
