import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '@components';
import { routes } from 'pages';

function App() {
  return (
    <div className="max-w-[100vw] min-h-screen flex items-center justify-center overflow-x-hidden">
      <Switch>
        {routes.map(({ isProtected, ...props }, idx) =>
          isProtected ? (
            <PrivateRoute
              key={`ProtectedRoute__${idx}-${props.path}`}
              {...props}
            />
          ) : (
            <Route key={`Route__${idx}-${props.path}`} {...props} />
          )
        )}
        <Route path="*" component={() => <h1>Oops! Not found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
