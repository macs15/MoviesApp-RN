import React from 'react'
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import useMovies from '../hooks/useMovies'
import MoviePoster from '../components/MoviePoster'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'
import MoviesCarousel from '../components/MoviesCarousel'

const { width: windowWidth } = Dimensions.get('window')

const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, loading } = useMovies()
  const { top } = useSafeAreaInsets()

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator color="red" size={80} />
      </View>
    )
  }
  return (
    <ScrollView>
      <View style={{ marginTop: top }}>
        {/* Carousel Principal */}
        <View>
          <Carousel
            data={nowPlaying}
            inactiveSlideOpacity={0.9}
            renderItem={({ item }) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>

        <MoviesCarousel movies={popular} title="Populares" />
        <MoviesCarousel movies={topRated} title="Mejor calificadas" />
        <MoviesCarousel movies={upcoming} title="Próximamente" />
      </View>
    </ScrollView>
  )
}

export default HomeScreen
