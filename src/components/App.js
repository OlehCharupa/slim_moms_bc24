import { Switch, Route } from 'react-router-dom';
import routes from '../routes/routes';
import React from 'react';
import Navigation from './Navigation/Navigation';
// import PrivateRoute from './PrivateRoute/PrivateRoute';
// import PublicRoute from './PublicRoute/PublicRoute';
import styles from './App.module.css';
import Modal from './modal/Modal';
import SpinerLoader from './spinerLoader/SpinerLoader';

function App() {

  return (
    <div>
      {/* <Modal>
      <h2>Modal title</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
          aliquam, similique asperiores voluptates eos expedita modi
          pariatur ipsa necessitatibus fuga harum! Animi, facilis
          reiciendis nesciunt alias quo unde tempora. Natus eum delectus
          porro placeat, praesentium, harum maiores sunt explicabo quidem,
          excepturi nam repellendus officiis distinctio minima enim magnam
          et accusamus.
        </p>
      </Modal> */}
      <SpinerLoader />
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



