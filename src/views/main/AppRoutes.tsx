import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { LoadingSpinner } from '../../components'
import { useStoreState } from '../../core'

const HomeContainer = lazy(() => import('../home/HomeContainer'))
const GenresContainer = lazy(() => import('../genres/GenresContainer'))
const AuthCallback = lazy(() => import('./AuthCallback'))
const PlaylistsContainer = lazy(() => import('../playlists/PlaylistsContainer'))

export const AppRoutes = () => {
  const currentUser = useStoreState((state) => state.currentUser.user)

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (currentUser ? <Redirect to="/genres" /> : <HomeContainer />)}
        />
        <Route exact path="/auth-callback" component={AuthCallback} />
        <Route exact path="/genres" component={GenresContainer} />
        <Route
          path="/playlist/:genreId"
          render={({
            match: {
              params: { genreId },
            },
          }) => <PlaylistsContainer genreId={parseInt(genreId)} />}
        />
      </Switch>
    </Suspense>
  )
}
