import { Link } from 'react-router-dom';
import { OauthLink, Logo, LoginForm } from '@components';
import { useAuth } from '@hooks';

const RegisterPage = () => {
  const { registerUser } = useAuth();

  return (
    <div className="md:w-[473.83px] w-full h-screen md:h-auto md:border-2 mx-auto rounded-xl p-4 md:py-12 md:px-14 flex flex-col space-y-4 items-stretch">
      <Logo />
      <div className="font-semibold text-lg">
        Join thousands of learners from around the world
      </div>
      <div className="text-[#333] dark:text-white md:pb-0 pb-4">
        Master web development by making real-life projects. There are multiple
        paths for you to choose
      </div>
      <LoginForm label="Start coding now" onSubmit={registerUser} />
      <div className="flex flex-col items-center pt-4 space-y-4">
        <div className="text-sm text-gray-500 text-center">
          or continue with these social profile
        </div>
        <div className="flex items-center space-x-4 mx-auto">
          <OauthLink type="google" />
          <OauthLink type="github" />
        </div>
        <div className="text-center text-gray-500">
          Already a member?{' '}
          <Link to="/auth/login" className="text-blue-400">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
