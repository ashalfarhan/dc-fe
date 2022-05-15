import { Link } from 'react-router-dom';
import { OauthLink, Logo, LoginForm } from '@components';
import { useAuth } from '@hooks';

const LoginPage = () => {
  const { login } = useAuth();

  return (
    <div className="sm:w-[473.83px] w-full sm:border-2 mx-auto rounded-xl py-12 px-6 sm:px-14 flex flex-col space-y-4 items-stretch">
      <Logo />
      <div className="font-semibold text-lg">Login</div>
      <LoginForm label="Login" onSubmit={login} />
      <div className="flex flex-col items-center pt-4 space-y-4">
        <div className="text-sm text-gray-500 text-center">
          or continue with these social profile
        </div>
        <div className="flex items-center space-x-4 mx-auto">
          <OauthLink type="google" />
          <OauthLink type="github" />
        </div>
        <div className="text-center">
          Don't have an account yet?{' '}
          <Link to="/auth/register" className="text-blue-400">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
