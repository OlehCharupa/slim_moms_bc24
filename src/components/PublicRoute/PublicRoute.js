import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isLogin } from '../../redux/selectors/selectors'; // тестовая логика, пока не заменят. 

import { paths } from '../../routes/routes';

const PublicRoute = ({ component: Component, ...routeProps }) => {
  const isLoginState = useSelector(isLogin);
console.log(routeProps)
console.log(Component)
  return (<Route
    {...routeProps}
    render={props => {
      return !isLoginState && routeProps.restricted ? (
        <Redirect to={paths.home} />
      ) : (
          <Component {...props} />
        );
    }}
  />)
}


export default PublicRoute;