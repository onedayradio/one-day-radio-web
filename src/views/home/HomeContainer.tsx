import React, { useEffect } from 'react'
import { Flex, useToast } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'
import { useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import * as H from 'history'

import {
  Footer,
  GenreCard,
  GenresCards,
  HomeHeader,
  QueryResponseWrapper,
  MainBanner,
  LoginBox,
} from '../../components'
import { Genre, GenresResponse, LOAD_ALL_GENRES, toastsHelper } from '../../shared'

const backgroundImage = isMobile ? "url('/home-mobil.jpg')" : "url('/home-desktop.jpg')"

const getLocationState = ({ history }: any) => history?.location?.state

const displayAuthWarning = ({ toast, history }: { toast: any; history: H.History }) => {
  const locationState = getLocationState({ history })
  const error = locationState?.error
  delete locationState?.error
  history.replace('/', locationState)
  if (error) {
    toastsHelper.showWarningToast(error, toast)
  }
}

export default () => {
  const history = useHistory()
  const toast = useToast()
  const { data, error } = useQuery<GenresResponse>(LOAD_ALL_GENRES)
  const genres = data?.genres || []

  useEffect(() => {
    displayAuthWarning({ toast, history })
  }, [toast, history])

  const onGenreClick = (genre: Genre) => {
    history.push(`/genre/${genre.id}/playlist/${genre.playlistId}`)
  }

  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      align="center"
      bgImage={backgroundImage}
      backgroundRepeat="round"
      h={['100%', 'auto']}
    >
      <HomeHeader />
      <MainBanner />
      <LoginBox />
      {!isMobile && (
        <QueryResponseWrapper loading={false} error={error}>
          <GenresCards title="Choose your favorite music style!">
            {genres.map((genre) => (
              <GenreCard
                height={[100, 250]}
                width={['50%', '33.33%']}
                key={genre.id}
                genre={genre}
                onClick={onGenreClick}
              />
            ))}
          </GenresCards>
        </QueryResponseWrapper>
      )}
      <Footer />
    </Flex>
  )
}
