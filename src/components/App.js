import { Switch, Route } from 'react-router-dom';
import routes from '../routes/routes';
import React from 'react';
import Navigation from './Navigation/Navigation';
// import PrivateRoute from './PrivateRoute/PrivateRoute';
// import PublicRoute from './PublicRoute/PublicRoute';

const App = () => {
  return (
    <div>
      <Navigation />

      <Switch>
        {/* Вставте вместо render={() => <h2>Home</h2>} --> component={свой компонент, соответствующий роуту} */}
        <Route exact path={routes.home} render={() => <h2>Home</h2>} />
        <Route path={routes.registration} render={() => <h2>Регистрация</h2>} />
        <Route path={routes.login} render={() => <h2>Вход</h2>} />
        <Route path={routes.diary} render={() => <h2>Дневник</h2>} />
        <Route path={routes.calculator} render={() => <h2>Калькулятор</h2>} />

        {/* {routes.map(route => {
          return route.private ? (
            <PrivateRoute key={route.label} {...route} />
          ) : (
              <PublicRoute key={route.label} {...route} />
            )
        })} */}

      </Switch>
    </div>
  );
}

export default App;


