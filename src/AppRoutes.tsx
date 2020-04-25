import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomePage } from './views'

export const AppRoutes = () => (
  <Switch>
    <Route exact path="/" render={() => <HomePage />} />
  </Switch>
)
