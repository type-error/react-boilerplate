import React from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'
import HomeContainer from 'container/HomeContainer'
import AuthedRouteContainer from 'container/AuthedRouteContainer'

const Routing: React.FC = () => {
  return (
    <Switch>
      {/* <Route exact path="/home" component={HomeContainer} /> */}
      <AuthedRouteContainer exact path="/home" component={HomeContainer} />
      <Redirect from="*" to="/login" />
    </Switch>
  )
}

export default Routing
