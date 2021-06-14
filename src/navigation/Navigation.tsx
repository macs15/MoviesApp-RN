import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'
import theme from '../theme/theme'
import { Movie } from '../interfaces/movieInterface'

export type RootStackParams = {
  HomeScreen: undefined
  DetailScreen: Movie
}

const Stack = createStackNavigator<RootStackParams>()

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          ...theme.appContainer
        }
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default Navigation
