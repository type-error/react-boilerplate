import React from 'react'

import { Redirect, Route, RouteProps } from 'react-router-dom'
// import { Location } from 'lib/history'

export interface AuthedRouteProps extends RouteProps {
  login: boolean
}

class AuthedRoute extends Route<AuthedRouteProps> {
  // redirectTo = (location: Location) => <Redirect to={{ pathname: '/login', state: { from: location } }} />

  render = () => {
    const { login, children, component, ...rest } = this.props

    if (login) {
      return (
        <Route {...rest} component={component}>
          {children}
        </Route>
      )
    } else {
    }
  }
}

export default AuthedRoute
