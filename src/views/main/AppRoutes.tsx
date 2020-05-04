import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomeContainer } from '..'
import { AuthCallback } from './AuthCallback'

export const AppRoutes = () => (
  <Switch>
    <Route exact path="/" render={() => <HomeContainer />} />
    <Route exact path="/auth-callback" render={() => <AuthCallback />} />
  </Switch>
)
