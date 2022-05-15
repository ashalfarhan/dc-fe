import { GithubIcon, GoogleIcon } from '../Icons';

type OauthLinkProps = {
  type: 'github' | 'google';
};

export const OauthLink = ({ type }: OauthLinkProps) => {
  const logo = () => {
    switch (type) {
      case 'github':
        return <GithubIcon />;
      case 'google':
        return <GoogleIcon />;
    }
  };

  return <a href={`http://localhost:8000/oauth/${type}`}>{logo()}</a>;
};
