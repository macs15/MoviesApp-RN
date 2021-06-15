import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { MovieFull } from '../interfaces/movieInterface'
import { Cast } from '../interfaces/creditInterface'
import Icon from 'react-native-vector-icons/Ionicons'
import CastItem from './CastItem'

interface Props {
  movieFull: MovieFull
  cast: Cast[]
}

const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <View style={styles.mainCointainer}>
      <View style={styles.container}>
        <Icon style={styles.rating} name="star" size={20} />
        <Text> {movieFull.vote_average}</Text>
        <Text> - {movieFull.genres.map(g => g.name).join(', ')}</Text>
      </View>

      {/* Sinopsis */}
      <Text style={styles.title}>Sinopsis</Text>
      <Text>{movieFull.overview}</Text>

      {/* Presupuesto */}
      <Text style={styles.title}>Presupuesto</Text>
      <Text>
        ${movieFull.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} USD
      </Text>

      <Text style={{ ...styles.title, marginTop: 18 }}>Reparto</Text>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={cast}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <CastItem actor={item} />}
        contentContainerStyle={{
          marginBottom: 20,
          borderRadius: 100
        }}
        style={{ borderRadius: 100 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainCointainer: {
    marginHorizontal: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8
  },
  container: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  rating: {
    color: 'gold'
  }
})

export default MovieDetails
