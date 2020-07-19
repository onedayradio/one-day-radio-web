import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomeContainer, GenresContainer, PlaylistsContainer } from '..'
import { AuthCallback } from './AuthCallback'

export const AppRoutes = () => (
  <Switch>
    <Route exact path="/" render={() => <HomeContainer />} />
    <Route exact path="/auth-callback" render={() => <AuthCallback />} />
    <Route exact path="/genres" render={() => <GenresContainer />} />
    <Route
      path="/playlist/:genreId"
      render={({
        match: {
          params: { genreId },
        },
      }) => <PlaylistsContainer genreId={genreId} />}
    />
  </Switch>
)
