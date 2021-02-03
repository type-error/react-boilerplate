import React from 'react'
import { RouteProps } from 'react-router-dom'

import { AuthedRoute } from 'components/AuthedRoute'

const AuthedRouteContainer: React.FC<RouteProps> = (props: RouteProps) => {
  return <AuthedRoute login={true} {...props} />
}

export default AuthedRouteContainer
