import React from 'react'
import { PlaylistGenresContainer } from './PlaylistGenresContainer'
import { PlaylistSongsContainer } from './PlaylistSongsContainer'

interface PlaylistsContainerProps {
  genreId: string
}

export const PlaylistsContainer = React.memo(({ genreId }: PlaylistsContainerProps) => {
  console.log('Playlists container, genreId: ', genreId)
  return (
    <div>
      <PlaylistSongsContainer genreId={genreId}/>
      <PlaylistGenresContainer genreId={genreId}/>
    </div>
  )
})
