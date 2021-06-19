import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native'
import { Cast } from '../interfaces/creditInterface'

const { width } = Dimensions.get('window')

interface Props {
  actor: Cast
}

const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

  return (
    <View style={{ ...styles.cardContainer }}>
      {actor.profile_path && (
        <Image
          style={styles.image}
          source={{
            uri
          }}
        />
      )}
      <View style={{ marginLeft: 8 }}>
        <Text style={styles.cardTitle}>{actor.name}</Text>
        <Text style={styles.cardInfo}>{actor.character}</Text>
      </View>
    </View>
  )
}

export default CastItem

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#111',
    width: width * 0.7,
    height: 80,
    marginRight: 10,
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.29,
    shadowRadius: 30.3,
    elevation: 4
  },
  image: {
    width: width * 0.2,
    borderRadius: 10
  },
  cardTitle: {
    marginTop: 8,
    color: '#fff',
    fontWeight: 'bold'
  },
  cardInfo: {
    color: 'white'
  }
})
