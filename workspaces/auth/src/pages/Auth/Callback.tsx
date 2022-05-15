import { useEffect } from 'react';
import { Fallback } from '@components';
// import { useHistory, useParams } from 'react-router-dom';
// import { useSetRecoilState } from 'recoil';
// import { tokenState } from '@state';

const CallbackPage = () => {
  // const history = useHistory();
  // const { token } = useParams<{ token?: string }>();
  // const setToken = useSetRecoilState(tokenState);

  useEffect(() => {
    // if (!token) {
    //   toast.error('Cannot logging you in');
    //   setTimeout(() => {
    //     history.goBack();
    //   }, 1000);
    //   return;
    // }
    // setToken(token);
    // let pathname: string;
    // try {
    //   const res = validateToken(token);
    //   pathname = res ? '/profile' : '/auth/login';
    // } catch {
    //   pathname = '/auth/login';
    // }

    // const timeId = setTimeout(() => {
    //   history.replace({ pathname });
    // }, 800);

    // return () => {
    //   clearTimeout(timeId);
    // };
  }, []);

  return <Fallback title="Please wait..." />;
};

export default CallbackPage;
