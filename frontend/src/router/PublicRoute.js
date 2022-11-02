import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import config from 'config';

function PublicRoute({
  component: Component,
  currentUser,
  ...rest
}) {

  return (
    <Route
      {...rest}
      render={(props) => {
        //console.log(props.location.pathname);
        // if (props.location.pathname.startsWith('/registrationreceipt')) {
        //   return <Component {...props} />;
        // }
        if (currentUser && Component.name !== "AuthServerError" && Component.name !== "InternalServer" && Component.name !== "NotFound") {
          let redirectTo = '/login'
          let permission = currentUser.permissions.split(",")
          let firstPermission = permission[0]
          for (var data of config.accessCheck) {
            if (firstPermission === data.label) {
              redirectTo = data.value[0]
            }
          }
          return <Redirect to={redirectTo} />;
        }

        return <Component {...props} />;
      }}
    />
  );
}

export default PublicRoute;
