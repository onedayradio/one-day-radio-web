import React from 'react'
import { PlaylistGenresContainer } from './PlaylistGenresContainer'
import { PlaylistSongsContainer } from './PlaylistSongsContainer'
import { PlaylistGenreBannerContainer } from './PlaylistGenreBannerContainer'

interface PlaylistsContainerProps {
  genreId: string
}

export default React.memo(({ genreId }: PlaylistsContainerProps) => {
  console.log('Playlists container, genreId: ', genreId)
  return (
    <div>
      <PlaylistGenreBannerContainer genreId={genreId}/>
      <PlaylistSongsContainer genreId={genreId} />
      <PlaylistGenresContainer genreId={genreId} />
    </div>
  )
})
