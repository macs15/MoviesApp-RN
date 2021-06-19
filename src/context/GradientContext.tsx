import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

interface ImageColors {
  primary: string
  secondary: string
}

interface ContextProps {
  colors: ImageColors
  prevColors: ImageColors
  setMainColors: (pairColors: ImageColors) => void
  setPrevMainColors: (pairColors: ImageColors) => void
}

export const GradientContext = createContext({} as ContextProps)

export const GradientProvider = ({ children }: any) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent'
  })

  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent'
  })

  const setMainColors = (pairColors: ImageColors) => {
    setColors(pairColors)
  }

  const setPrevMainColors = (pairColors: ImageColors) => {
    setPrevColors(pairColors)
  }

  return (
    <GradientContext.Provider
      value={{
        colors,
        prevColors,
        setMainColors,
        setPrevMainColors
      }}>
      {children}
    </GradientContext.Provider>
  )
}

export const useGradient = () => {
  const context = useContext(GradientContext)
  if (typeof context === 'undefined') {
    throw new Error('useGradient must be use within a GradientProvider')
  }
  return context
}
