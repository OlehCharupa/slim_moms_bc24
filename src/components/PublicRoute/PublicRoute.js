// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// const PublicRoute = ({ component: Component, isLogin, restricted, ...routeProps }) =>
//   <Route
//     {...routeProps}
//     render={props => {
//       return isLogin && routeProps.restricted ? (
//         <Redirect to='/diary' />
//       ) : (
//           <Component {...props} />
//         );

//     }}
//   />


// export default PublicRoute;