import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native'
import { RootStackParams } from '../navigation/Navigation'
import theme from '../theme/theme'

const { height } = Dimensions.get('window')

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({ route }: Props) => {
  const movie = route.params
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <ScrollView>
      <View style={{ ...styles.imgContainer, ...theme.shadow }}>
        <Image
          style={styles.posterImage}
          source={{
            uri
          }}
        />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
    </ScrollView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  posterImage: {
    width: '100%',
    backgroundColor: 'red',
    height: height * 0.7,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  imgContainer: {
    flex: 1
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 10
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.7
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})
