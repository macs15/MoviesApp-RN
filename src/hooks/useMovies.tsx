import { useState } from 'react'
import { useEffect } from 'react'
import movieDB from '../api/movieDB'
import { MovieDBResponse, Movie } from '../interfaces/movieInterface'

interface MoviesState {
  nowPlaying: Movie[]
  popular: Movie[]
  topRated: Movie[]
  upcoming: Movie[]
}

const useMovies = () => {
  const [loading, setLoading] = useState(true)
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: []
  })

  // 'popular'
  const getMovies = async () => {
    const nowPlaying = movieDB.get<MovieDBResponse>('now_playing')
    const popular = movieDB.get<MovieDBResponse>('popular')
    const topRated = movieDB.get<MovieDBResponse>('top_rated')
    const upcoming = movieDB.get<MovieDBResponse>('upcoming')

    const res = await Promise.all([nowPlaying, popular, topRated, upcoming])

    setMoviesState({
      nowPlaying: res[0].data.results,
      popular: res[1].data.results,
      topRated: res[2].data.results,
      upcoming: res[3].data.results
    })
    setLoading(false)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return {
    loading,
    ...moviesState
  }
}

export default useMovies
