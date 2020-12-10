import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isLogin } from '../../redux/selectors/selectors'; // тестовая логика, пока не заменят. 

import { paths } from '../../routes/routes';

const PublicRoute = ({ component: Component, ...routeProps }) => {
  const checkPath = () => (
    routeProps.location.pathname === '/registration'
      ? <Redirect to={paths.calculator} />
      : <Redirect to={paths.diary} />
  )
  const isLoginState = useSelector(isLogin);

  return (<Route
    {...routeProps}
    render={props => {
      return isLoginState && routeProps.restricted ? (
        checkPath()
      ) : (
          <Component {...props} />
        );
    }}
  />)
}


export default PublicRoute;