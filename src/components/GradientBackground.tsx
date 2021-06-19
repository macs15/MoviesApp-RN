import React from 'react'
import { useEffect } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useGradient } from '../context/GradientContext'
import useFade from '../hooks/useFade'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const GradientBackground = ({ children }: Props) => {
  const {
    prevColors: { primary, secondary },
    colors,
    setPrevMainColors
  } = useGradient()
  const { opacity, fadeIn, fadeOut } = useFade()

  useEffect(() => {
    fadeIn(() => {
      setPrevMainColors(colors)
      fadeOut(0)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors])

  return (
    <View>
      <LinearGradient
        colors={[primary, secondary, 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0.7, y: 0.25 }}
      />
      <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity }}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={{ ...StyleSheet.absoluteFillObject }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.7, y: 0.25 }}
        />
      </Animated.View>
      {children}
    </View>
  )
}

export default GradientBackground
