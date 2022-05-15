import { useAuth } from '@hooks';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { Layout } from './Layout';

export const PrivateRoute = ({
  component: Component,
  ...rest
}: RequiredPick<RouteProps, 'component'>) => {
  const { state } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        state.isLoggedIn ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
