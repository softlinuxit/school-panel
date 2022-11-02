import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import config from 'config';

function PrivateRoute({
  component: Component,
  currentUser,
  path,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!currentUser) {
          return <Redirect to="/login" />;
        }
        {
          let isAllowed = true
          let redirectTo = '/login'
          let permission = currentUser.permissions.split(",")
          let firstPermission = permission[0]
          for (var myData of config.accessCheck) {
            const data = myData
            for (var items of data.value) {
              if (firstPermission === data.label) {
                redirectTo = data.value[0]
              }
              if (items === path) {
                if (permission.some(item => item === data.label)) {
                  isAllowed = true
                }
                else {
                  isAllowed = false
                }
              }
            }
          }
          if (!isAllowed) {
            return <Redirect to={redirectTo} />;
          }
        }
        return <Component currentUser={currentUser} {...props} />;
      }}
    />
  );
}

export default PrivateRoute;
