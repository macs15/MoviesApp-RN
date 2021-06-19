import React from 'react'
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import useMovies from '../hooks/useMovies'
import MoviePoster from '../components/MoviePoster'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'
import MoviesCarousel from '../components/MoviesCarousel'
import GradientBackground from '../components/GradientBackground'
import { getColors } from '../helpers/colors'
import { useGradient } from '../context/GradientContext'
import { useEffect } from 'react'

const { width: windowWidth } = Dimensions.get('window')

const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, loading } = useMovies()
  const { top } = useSafeAreaInsets()
  const { setMainColors } = useGradient()

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index]
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const [primary, secondary] = await getColors(uri)
    setMainColors({ primary, secondary })
  }

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlaying])

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator color="red" size={80} />
      </View>
    )
  }
  return (
    <ScrollView>
      <GradientBackground>
        <View style={{ marginTop: top }}>
          {/* Carousel Principal */}
          <View>
            <Carousel
              data={nowPlaying}
              inactiveSlideOpacity={0.9}
              renderItem={({ item }) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          <MoviesCarousel movies={popular} title="Populares" />
          <MoviesCarousel movies={topRated} title="Mejor calificadas" />
          <MoviesCarousel movies={upcoming} title="Próximamente" />
        </View>
      </GradientBackground>
    </ScrollView>
  )
}

export default HomeScreen
