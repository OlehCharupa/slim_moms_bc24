// import { lazy } from 'react';

export const paths = {
  home: '/',
  registration: '/registration',
  login: '/login',
  diary: '/diary',
  calculator: '/calculator',
}

const routes = [
  {
    path: paths.home,
    label: 'Home', // записать сюда правильное имя, 
    exact: true,
    // component: lazy(() => import('./components/Home')), // раскомментировать,  в импорт внести место и имя своего компонента
    component: () => <h2>Home</h2>, // удалить, когда будет корректный импорт
    private: false,
    restricted: false,
  },
  {
    path: paths.registration,
    label: 'Регистрация',
    exact: true,
    // component: lazy(() => import('./components/Registration')), //раскомментировать,  в импорт внести место и имя своего компонента
    component: () => <h2>Регистрация</h2>, // удалить, когда будет корректный импорт
    private: false,
    restricted: true,
  },
  {
    path: paths.login,
    label: 'Вход',
    exact: true,
    // component: lazy(() => import('./components/Registration')), //раскомментировать,  в импорт внести место и имя своего компонента
    component: () => <h2>Вход</h2>, // удалить, когда будет корректный импорт
    private: false,
    restricted: true,
  },
  {
    path: paths.diary,
    label: 'Дневник',
    exact: true,
    // component: lazy(() => import('./components/Diary')), //раскомментировать,  в импорт внести место и имя своего компонента
    component: () => <h2>Дневник</h2>, // удалить, когда будет корректный импорт
    private: true,
    restricted: true,
  },
  {
    path: paths.calculator,
    label: 'Калькулятор',
    exact: true,
    // component: lazy(() => import('./components/Calculator')), //раскомментировать,  в импорт внести место и имя своего компонента
    component: () => <h2>Калькулятор</h2>, // удалить, когда будет корректный импорт
    private: true,
    restricted: true,
  },

]
export default routes;



