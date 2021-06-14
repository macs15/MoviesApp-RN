import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import theme from '../theme/theme';

interface Props {
  movie: Movie
  width?: number
  height?: number
}

const MoviePoster = ({ movie, width = 300, height = 440 }: Props) => {
  const { navigate } = useNavigation()
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <TouchableOpacity
      onPress={() => navigate('DetailScreen', movie)}
      activeOpacity={0.9}
      style={{ width, height, marginHorizontal: 6 }}>
      <View style={{ ...styles.imgContainer, ...theme.shadow }}>
        <Image source={{ uri }} style={styles.image} />
      </View>
    </TouchableOpacity>
  )
}

export default MoviePoster

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18
  },
  imgContainer: {
    marginVertical: 20,
    flex: 1,
    borderRadius: 18
  }
})
