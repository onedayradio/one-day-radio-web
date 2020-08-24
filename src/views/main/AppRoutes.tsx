import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { LoadingSpinner } from '../../components'

const HomeContainer = lazy(() => import('../home/HomeContainer'))
const GenresContainer = lazy(() => import('../genres/GenresContainer'))
const AuthCallback = lazy(() => import('./AuthCallback'))
const PlaylistsContainer = lazy(() => import('../playlists/PlaylistsContainer'))

export const AppRoutes = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/auth-callback" component={AuthCallback} />
      <Route exact path="/genres" component={GenresContainer} />
      <Route
        path="/playlist/:genreId"
        render={({
          match: {
            params: { genreId },
          },
        }) => <PlaylistsContainer genreId={genreId} />}
      />
    </Switch>
  </Suspense>
)
