import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { LoadingSpinner } from '../../components'
import { useStoreState } from '../../core'

const HomeContainer = lazy(() => import('../home/HomeContainer'))
const notFound = lazy(() => import('../home/404'))
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
          exact
          path="/genre/:genreId/playlist/:playlistId"
          render={({
            match: {
              params: { playlistId, genreId },
            },
          }) => (
            <PlaylistsContainer playlistId={parseInt(playlistId)} genreId={parseInt(genreId)} />
          )}
        />
        <Route component={notFound} />
      </Switch>
    </Suspense>
  )
}
