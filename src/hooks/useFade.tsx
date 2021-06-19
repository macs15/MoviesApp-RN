import { useRef } from 'react'
import { Animated } from 'react-native'

const useFade = (initialOpacity: number = 0) => {
  const opacity = useRef(new Animated.Value(initialOpacity)).current

  const fadeIn = (callback?: Function, duration: number = 300) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true // aceleración por hardware
    }).start(() => (callback ? callback() : undefined))
  }

  const fadeOut = (duration: number = 300) => {
    Animated.timing(opacity, {
      toValue: 0,
      duration,
      useNativeDriver: true
    }).start()
  }

  return {
    opacity,
    fadeIn,
    fadeOut
  }
}

export default useFade
