import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import MoviePoster from './MoviePoster'
import theme from '../theme/theme'

interface Props {
  title?: string
  width?: number
  height?: number
  movies: Movie[]
}

const MoviesCarousel = ({
  title,
  movies,
  width = 140,
  height = 240
}: Props) => {
  return (
    <View>
      {title && <Text style={{ ...theme.title, marginLeft: 8 }}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster movie={item} width={width} height={height} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default MoviesCarousel
