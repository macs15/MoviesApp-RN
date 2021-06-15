import { useEffect } from 'react'
import { useState } from 'react'
import movieDB from '../api/movieDB'
import { MovieFull } from '../interfaces/movieInterface'
import { Cast, CreditsResponse } from '../interfaces/creditInterface'

interface MovieDetails {
  loading: boolean
  movieFull?: MovieFull
  cast: Cast[]
}

const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    loading: true,
    movieFull: undefined,
    cast: []
  })

  const getMovieDetails = async () => {
    const moviePromise = await movieDB.get<MovieFull>(`${movieId}`)
    const creditsPromise = await movieDB.get<CreditsResponse>(
      `${movieId}/credits`
    )

    const [movieDetailsResponse, castResponse] = await Promise.all([
      moviePromise,
      creditsPromise
    ])

    setState({
      loading: false,
      movieFull: movieDetailsResponse.data,
      cast: castResponse.data.cast
    })
  }

  useEffect(() => {
    getMovieDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    ...state
  }
}

export default useMovieDetails
